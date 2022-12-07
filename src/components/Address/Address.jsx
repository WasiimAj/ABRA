import './Address.css';
import back from "../../Images/back.png";
import Edit from "../../Images/edit.png";
import Delete from "../../Images/delete.png";

const Address = () => {
    return (
        <> 
            <div className="address-page-box">
                <header className='address-header'>
                    <a href="/">
                        <img src={back} alt="go-back-img" />
                    </a>
                    <p> My Address </p>
                    <button 
                        onClick={() => {
                            document.getElementById('add-address-box').style.display = "block";
                        }}
                    >+</button>
                </header>

                <main className='all-address-box'>
                    <div className="address-location">
                        <div className="address-name">
                            <input type="radio" name="" id="address-name" />
                            <label htmlFor="address-name">Address Name</label>
                        </div>
                        <div className="edit-delete-address">
                            <img src={Edit} alt="edit-address-img" />
                            <img src={Delete} alt="delete-address-img" />
                        </div>
                    </div>
                </main>
            </div>


            {/* Add Address PopUp */}

            <div id='add-address-box' className='add-address-box'>
                <header>
                    <img
                        onClick={() => {
                            document.getElementById('add-address-box').style.display = "none";
                        }}
                        src={back} 
                        alt="go-back-img"
                    />
                    <p>Add Address</p>
                </header>

                <form action="">
                    <input type="text" placeholder='Address Name' />
                    <input type="text" placeholder='Address' />
                    <input type="text" placeholder='City' />

                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Address