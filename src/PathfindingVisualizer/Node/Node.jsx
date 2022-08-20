import styles from "./Node.module.css";

const Node = (props) => {
  const { isFinish, isStart } = props;
  const extraClassName = isFinish
    ? styles["node-finish"]
    : isStart
    ? styles["node-start"]
    : "";
  return <div className={`${styles.node} ${extraClassName}`}></div>;
};

export default Node;
