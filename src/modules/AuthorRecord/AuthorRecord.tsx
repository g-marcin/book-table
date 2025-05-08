import { FC, useState } from "react";
import { useNavigate, useParams, useSubmit } from "react-router-dom";
import styles from "./authorRecord.module.css";

type AuthorRecordProps = {
  author: string;
  className:string | undefined
};

export const AuthorRecord: FC<AuthorRecordProps> = ({ author, className }) => {
  const { author: routeAuthor } = useParams();
  const [mouseOver, setMouseOver] = useState(false);
  const navigate = useNavigate();
  const submit = useSubmit()
  

  const getAuthorUrl=(author:string)=>`${author.replace(' ', '-').toLowerCase()}`

  return (
    <>
    <button className={className} onClick={()=>{
      // navigate(getAuthorUrl(author))
      setTimeout(()=>null,1000)
      submit('',{
        method: "post",
        action: `/authors/${getAuthorUrl(author)}`,
      })
}}>{author}</button>
    <br/>
    </>
    
    // <tr
    //   className={`${styles.bookRecord} ${routeAuthor === author ? "table-primary" : ""} ${
    //     mouseOver ? "table-secondary" : ""
    //   }`}
    //   onClick={() => {
    //     navigate(`/${author.replace(' ','-').toLowerCase()}`);
    //   }}
    //   onMouseOver={() => {
    //     setMouseOver(true);
    //   }}
    //   onMouseOut={() => {
    //     setMouseOver(false);
    //   }}
    //   role="author-record"
    // >
    //   <td className={styles.cell}>{author}</td>
    // </tr>
  );
};
