import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, gitLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "green",
              color: "white",
              border: "none",
              padding: "10px 20px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              margin: "4px 2px",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            git
          </a>
        </div>
      </div>
    </Col>
  );
};
