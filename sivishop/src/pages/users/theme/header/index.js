import { memo } from "react";
import "./style.scss";
import { AiOutlineFacebook, AiOutlineGlobal, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { formatter } from "utils/fomater";
const Header = () => {
    return (
        <div className="header_top">
            <div className="container">
                <div className="row">
                    <div className="col-6 header__top_left">
                        <ul>
                            <li>
                                <AiOutlineMail />hello@gmail.com
                            </li>
                            <li>
                                Miễn phí ship hóa đơn từ {formatter(200000)} 
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 header__top_right">
                        <ul>
                            <li>
                                <Link to={""}> 
                                    <AiOutlineFacebook />   
                                </Link>
                                    
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineGlobal />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineUser />
                                </Link>
                                <span>Đăng nhập</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default memo(Header);