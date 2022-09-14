const formStyle = {
    color: "white",
    textAlign: "center"
};

const colorUl = {
    backgroundColor: "darkgrey",
}

function Randomname() {
    return(
        <form style={formStyle} >
            <ul style={colorUl}>
                <li>
                    <label>Name:</label>
                    <input type="text" id="name" name="user_name" required={true}></input>
                </li>
                <li>
                    <label>E-mail:</label>
                    <input type="email" id="email" name="user_email" required={true}></input>
                </li>
                <li>
                    <label>Message:</label>
                    <textarea id="message" name="user_message" required={true}></textarea>
                </li>
                <li>
                    <button type="reset">Reset Your Message</button>
                </li>
                <li>
                    <button type="submit">Submit Your Message</button>
                </li>
            </ul>
        </form>
    );
}

export default Randomname;