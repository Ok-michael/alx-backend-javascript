export default function taskBlock(trueorFalse) {
    let task = false;
    let task2 = true;

    if (trueorFalse) {

        /*eslint-disable*/
        const task = true;
        /*eslint-disable*/
        const task2 = false;
    }

    return [task, task2];
}
