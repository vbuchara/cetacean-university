export type SearchFormBlockProps = {
    searchAction: string;
};

export function SearchFormBlock({
    searchAction
}: SearchFormBlockProps){
    return (
    <div className="container container--narrow page-section">
        <div className="generic-content">
            <form
                className="search-form"
                action={searchAction}
                method="get"
            >
                <label
                    className="headline headline--medium" 
                    htmlFor="search-input"
                >
                    What are you searching for?
                </label>
                <div className="search-form-row">
                    <input 
                        id="search-input"
                        className="s"
                        type="search"
                        placeholder="Type what you want to search for!"
                        name="s"
                    />
                    <button
                        className="search-submit btn btn--primary btn--slide-from-top"
                        type="submit"
                    >Search</button>
                </div>
            </form>
        </div>
    </div>
    );
}