const dbPool1 = 1;
function d() {
}
async function fn() {
    d();
}
async function fn1() {
    d();
}
function router() {
    fn();
    fn1();
}
router();
export { dbPool1 as dbPool };
