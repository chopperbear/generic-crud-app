function BookCreateForm() {
    return (
        <section id="book-form" className="level">
            <div className="level-left">
                <div className="level-item">
                    <h5 class="subtitle">Create book listing</h5>
                </div>
                <div className="level-item">
                    <div className="field has-addons">
                        <p class="control">
                            <input type="text" className="input" placeholder="Enter Book Title" />
                        </p>
                        <p class="control">
                            <button class="button">Add Book</button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookCreateForm; 