import React, { useEffect, useState } from "react";
import axios from "axios";
import ContentTableRow from "./ContentTableRow";

const ContentTable: React.FC = () => {
  const [content, setContent] = useState<any[]>([]);
  useEffect(() => {
    fetchContent();
  }, []);
  const fetchContent = () => {
    axios.get("/api/content", {}).then(async (response) => {
      await setContent(response.data.content);
    });
    console.log(content);
  };
  const renderContent = () => {
    if (!content.length)
      return (
        <progress className="progress is-small is-primary" max="100">
          15%
        </progress>
      );

    const renderedEvents = content.map((content) => {
      return <ContentTableRow content={content} key={content._id} />;
    });
    return renderedEvents;
  };
  const newContentClick = async () => {
    await axios.post("/api/content", {
      title: "New Content",
      category: "Blog",
      preview: "Write Preview here",
      author: "Author's Name",
      interest: "write interest here",
      url: "https://www.example.com",
      featured: false,
    });
    fetchContent();
  };
  return (
    <div>
      <section className="section" id="table">
        <h1 className="title">Content</h1>
        <table className="table">
          <thead>
            <tr>
              <th>
                <a>Title</a>
              </th>
              <th>Author</th>
              <th>Category</th>
              <th>Featured</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <tr>
                <button className="button is-success" onClick={newContentClick}>
                  + New Content
                </button>
              </tr>
            </tr>
          </tfoot>
          <tbody>{renderContent()}</tbody>
        </table>
      </section>
    </div>
  );
};

export default ContentTable;
