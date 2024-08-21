import { DynamoDBClient, UpdateItemCommand, GetItemCommand, PutItemCommand, DeleteItemCommand } from '@aws-sdk/client-dynamodb';
//import { DynamoDBDocumentClient, } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
//const docClient = DynamoDBDocumentClient.from(client);
const TABLENAME = 'BookList';

// Take a CRUD action, and handle accordingly. 
//   - if GET - query existing booklist in DynamoDB and return
//   - if DELETE - delete item from DynamoDB and return 
//   - if PUT - update existing record in DynamoDB and return
//   - if POST - add new item to DynamoDB and return
export const handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    let body;
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
    };
    const eventBody = JSON.parse(event.body);

    try {
        switch (event.httpMethod) {
            case 'DELETE':
                body = await dynamo.delete(JSON.parse(event.body));
                break;
            case 'GET':
                body = await dynamo.scan({ TableName: event.queryStringParameters.TableName });
                break;
            case 'POST':
                // For more information about data types,
                // see https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes and
                // https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.LowLevelAPI.html#Programming.LowLevelAPI.DataTypeDescriptors
                const bookID = eventBody.bookID;
                const title = eventBody.title;
                const command = new PutItemCommand({
                    TableName: TABLENAME,
                    Item: {
                        BookID: { S: bookID },
                        Title: { S: title },
                    },
                });

                body = await client.send(command);
                break;
            case 'PUT':
                body = await dynamo.update(JSON.parse(event.body));
                break;
            default:
                throw new Error(`Unsupported method "${event.httpMethod}"`);
        }
    } catch (err) {
        statusCode = '400';
        body = err.message;
    } finally {
        body = JSON.stringify(body);

        console.log(`***** ${statusCode} *****`);
        console.log(body);
    }

    return {
        statusCode,
        body,
        headers,
    };
};

