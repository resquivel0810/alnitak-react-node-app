
export default function GetInTouch2() {
    return (
        <form
            action="/send_email"
            method="POST"
            // style="max-width: 500px; margin: auto"
        >
            <div className="input-wrapper">
                <input
                    className="input-field"
                    type="text"
                    placeholder="Nombre"
                    name="subject"
                    required
                />
            </div>
            <div className="input-wrapper">
                    <input
                        className="input-field"
                        type="text"
                        placeholder="Correo"
                        name="email"
                        autoComplete="off"
                        required
                    />
            </div>
            <div className="input-wrapper">
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Escríbenos..."
                        required
                    ></textarea>
            </div>
            <button type="submit" className="send-btn">Enviar</button>
    </form>
    )
  }



