import PropTypes from "prop-types";
export const Textarea = ({name, id,rows="5", cols = "33", content}) => {
  return (
    <textarea className="textarea" name={name} id={id} cols={cols} rows={rows}>{content}</textarea>
  );
};
Textarea.protoTypes = {
  content: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  cols: PropTypes.number,
  rows: PropTypes.number,
};