import { DynamoDBClient, UpdateItemCommand, ScanCommand, PutItemCommand, DeleteItemCommand } from '@aws-sdk/client-dynamodb';
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
    const bookID = eventBody.bookID;
    const title = eventBody.title;
    let dbCommand;

    try {
        switch (event.httpMethod) {
            case 'DELETE':
                dbCommand = new DeleteItemCommand({
                    TableName: TABLENAME,
                    Key: {
                        BookID: {
                            S: bookID
                        },
                    }
                });
                body = await client.send(dbCommand);
                break;
            case 'GET':
                dbCommand = new ScanCommand({
                    TableName: TABLENAME
                });
                body = await client.send(dbCommand);
                break;
            case 'POST':
                dbCommand = new PutItemCommand({
                    TableName: TABLENAME,
                    Item: {
                        BookID: { S: bookID },
                        Title: { S: title },
                    },
                });
                body = await client.send(dbCommand);
                break;
            case 'PUT':
                // PutItemCommand will replace item if it exists
                dbCommand = new PutItemCommand({
                    TableName: TABLENAME,
                    Item: {
                        BookID: { S: bookID },
                        Title: { S: title },
                    },
                });
                body = await client.send(dbCommand);
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

