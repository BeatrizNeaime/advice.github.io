const Button = () => {
    return (
        <button className="bg-neon p-3 rounded-full hover:shadow-neon-500/50" >
            <img src={require("../assets/icon-dice.png")} alt="new advice" />
        </button>
    )
}

export default Button