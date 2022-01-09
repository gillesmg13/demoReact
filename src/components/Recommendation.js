const currentMounth = new Date().getMonth()
const isSpring = currentMounth >= 2 && currentMounth <= 5 ? true : false

function Recommendation() {
if (isSpring) {
    return <div>C'est le printemps, rempoter 🪴</div>
}
return <div>Ce n'est pas le moment de rempoter!</div>

}

export default Recommendation