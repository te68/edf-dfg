import React from "react";

import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
interface RowProps {
  content: {
    title: string;
    _id: string;
    url: string;
    author: string;
    featured: boolean;
    preview: string;
    category: string;
    interest: string;
  };
}

const ContentTableRow: React.FC<RowProps> = ({ content }) => {
  const { title, author, featured, category } = content;
  const history = useHistory();
  const onClick = () => {
    history.push({
      pathname: "/content",
      state: { content: content },
    });
  };
  return (
    <tr>
      <th>{title}</th>
      <td>{author}</td>
      <td>{category}</td>
      <td>{featured ? "Yes" : "No"}</td>
      <td>
        <button className="button is-primary" onClick={onClick}>
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ContentTableRow;
