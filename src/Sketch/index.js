import Draw from "./draw";
import Setup from "./setup";

const sketch = ( sk ) => {
    sk.setup = () => {
        Setup(sk);
    };

    sk.draw = () => {
        Draw(sk);
    };
};

export default sketch;
