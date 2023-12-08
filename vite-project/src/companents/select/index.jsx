import './index.css'

function Select() {
    return (
        <>
            <div className="select">
                <div className="deadline">
                    <label id='label-muddat' for="muddat"><p id='p'>Ariza topshirish muddati</p></label>
                    <select name="muddat" id="muddat">
                        <plaintext>hello</plaintext>
                        <option value="24/7">24/7</option>
                        <option value="06:00/18:00">06:00/18:00</option>
                        <option value="18:00/22:00">18:00/22:00</option>

                    </select>
                </div>
                <div className="turi">
                    <label for="turi"><p id='p'>Ish turi</p></label>

                    <select name="turi" id="turi">
                        <option value="full-stack">full-stack</option>
                        <option value="frontend">frontend</option>
                        <option value="backend">backend</option>

                    </select>
                </div>
                <div className="vaqti">
                    <label for="vaqti"><p id='p'>Ish vaqti</p></label>

                    <select name="vaqti" id="vaqti">
                        <option value="24/7">24/7</option>
                        <option value="06:00/18:00">06:00/18:00</option>
                        <option value="18:00/22:00">18:00/22:00</option>

                    </select>
                </div>
            </div>
        </>
    )
}

function Select2() {
    return (
        <>
            <div className="select">
                <div className="davlat">
                    <label id='label-davlat' for="davlat"><p id='p'>Davlat</p></label>
                    <select name="davlat" id="davlat">
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Karakalpakistan">Karakalpakistan</option>

                    </select>
                </div>

                <div className="davlat">
                    <label id='label-davlat' for="davlat"><p id='p'>Shahar</p></label>
                    <select name="davlat" id="davlat">
                        <option value="Uzbekistan">Kukand</option>
                        <option value="Karakalpakistan">Fergana</option>
                        <option value="Margilan">Margilan</option>

                    </select>
                </div>
            </div>

            <div className="select">
                <div className="Til">
                    <label id='label-davlat' for="davlat"><p id='p'>Til</p></label>
                    <select name="davlat" id="davlat">
                        <option value="uzbek">Uzbek</option>
                        <option value="eng">eng</option>
                        <option value="rus">rus</option>

                    </select>
                </div>

                <div className="daraja">
                    <label id='label-davlat' for="davlat"><p id='p'>Darajasi</p></label>
                    <select name="davlat" id="davlat">
                        <option value="junior">Junior</option>
                        <option value="middle">Middle</option>
                        <option value="senior">Senior</option>

                    </select>
                </div>
            </div>

        </>
    )
}

function Select3() {
    return (
        <>
            <div className="select">
                <div className="Til">
                    <label id='label-davlat' for="davlat"><p id='p'>Minimal maosh</p></label>
                    <select name="davlat" id="davlat">
                        <option value="uzbek">100$</option>
                        <option value="eng">200$</option>
                        <option value="rus">450$</option>

                    </select>
                </div>

                <div className="daraja">
                    <label id='label-davlat' for="davlat"><p id='p'>Maksimal maosh</p></label>
                    <select name="davlat" id="davlat">
                        <option value="junior">400$</option>
                        <option value="middle">800$</option>
                        <option value="senior">1000$</option>

                    </select>
                </div>

            </div><br />
            <div className="checkbox">
                <input type="checkbox" name="" id="checkbox" />
                <label htmlFor="checkbox"><p>Kelishiladi</p></label>
            </div>
        </>
    )
}

function Select4() {
    return (
        <>
            <div className="select">
                <div className="davlat">
                    <label id='label-davlat' for="davlat"><p id='p'>Maosh muddati</p></label>
                    <select name="davlat" id="davlat">
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Karakalpakistan">Karakalpakistan</option>

                    </select>
                </div>

                <div className="davlat">
                    <label id='label-davlat' for="davlat"><p id='p'>Valyuta</p></label>
                    <select name="davlat" id="davlat">
                        <option value="Uzbekistan">Kukand</option>
                        <option value="Karakalpakistan">Fergana</option>
                        <option value="Margilan">Margilan</option>

                    </select>
                </div>
            </div>

            <div className="select">
                <div className="Til">
                    <label id='label-davlat' for="davlat"><p id='p'>Ta’lim darajasi</p></label>
                    <select name="davlat" id="davlat">
                        <option value="yuqori">yuqori</option>
                        <option value="orta">o'rta</option>
                        <option value="past">past</option>

                    </select>
                </div>

                <div className="daraja">
                    <label id='label-davlat' for="davlat"><p id='p'>Tajriba</p></label>
                    <select name="davlat" id="davlat">
                        <option value="6-oy+">6-oy+</option>
                        <option value="2-yil+">2-yil+</option>
                        <option value="5-yil+">5-yil+</option>

                    </select>
                </div>
            </div>

        </>
    )
}

export { Select, Select2, Select3, Select4}