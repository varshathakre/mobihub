import All_pages_option from "./Admin_components/All_pages_option";

const AddProduct = () => {
    return (
        <>
            <div className="First_box1">
                <div className="file_div">
                    <div>
                        <All_pages_option />
                    </div>
                </div>
                <div className="Upload_img_main_div">
                    <div className="img_div">
                        <div>
                            <img src="./Admin_images/uploadimg.png" alt="" />
                            <h3>Click to upload up to images</h3>
                        </div>
                    </div>
                    <div className="sec_box_img">
                        <div>
                            <img src="./Admin_images/app.png" alt="" />
                        </div>
                        <div>
                            <img src="./Admin_images/Galaxy.png" alt="" />
                        </div>
                        <div>
                            <img src="./Admin_images/i phone 13 2.png" alt="" />
                        </div>
                    </div>
                    <div className="Input_div_start">
                        <h2>Add Products</h2>
                        <div className="Input_div_start_box">
                            <div id="Name_input1">
                                <label>Enter Product Name :</label><br />
                                <input type="text"  />
                            </div>
                            <div id="Last_Name1">
                                <label>Enter Product Price :</label><br />
                                <input type="text" />
                            </div>
                            <div id="Last_Name1">
                                <label>Enter Regular price :</label><br />
                                <input type="text"/>
                            </div>
                            <div id="Last_Name1">
                                <label>Product ID :</label><br />
                                <input type="text" />
                            </div>
                            <div id="Last_Name1">
                                <label>Choose a Brands</label><br />
                                <input type="text"/>
                            </div>
                            <div id="Last_Name1">
                                <label>RAM :</label><br />
                                <input type="text"/>
                            </div>
                            <div id="Last_Name1">
                                <label>ROM :</label><br />
                                <input type="text"/>
                            </div>
                            <button id="Registration_btn1">
                             <h1>Add Product</h1>
                           </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default AddProduct;