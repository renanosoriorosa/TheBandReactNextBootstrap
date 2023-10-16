import { Col, Fade, Row } from "react-bootstrap";
import Image from "next/image";
import { useState } from "react";
import bandmemberJPG from '../../app/imgs/bandmember.jpg'
import '../css/members.css'

export default function Members(){
    const [openMember1, setOpenMember1] = useState(false);
    const [openMember2, setOpenMember2] = useState(false);
    const [openMember3, setOpenMember3] = useState(false);

    return (
        <Row>
            <Col sm="4">
                <p><strong>Name</strong></p><br/>
                <a
                    onClick={() => setOpenMember1(!openMember1)}
                    aria-controls="openMember1"
                    aria-expanded={openMember1}>
                    <Image width={255} height={255} className="person person-rouded" alt="" src={bandmemberJPG} ></Image>
                </a>
                <Fade  in={openMember1}>
                    <div id="openMember1">
                        <p>Guitarist and Lead Vocalist</p>
                        <p>Loves long walks on the beach</p>
                        <p>Member since 1988</p>
                    </div>
                </Fade>
            </Col>
            <Col sm="4">
                <p><strong>Name</strong></p><br/>
                <a
                onClick={() => setOpenMember2(!openMember2)}
                aria-controls="openMember2"
                aria-expanded={openMember2}>
                    <Image width={255} height={255} className="person person-rouded" alt="" src={bandmemberJPG} ></Image>
                </a>
                <Fade  in={openMember2}>
                    <div id="openMember2">
                        <p>Drummer</p>
                        <p>Loves drummin</p>
                        <p>Member since 1988</p>
                    </div>
                </Fade>
            </Col>
            <Col sm="4">
                <p><strong>Name</strong></p><br/>
                <a
                onClick={() => setOpenMember3(!openMember3)}
                aria-controls="openMember3"
                aria-expanded={openMember3}>
                    <Image width={255} height={255} className="person person-rouded" alt="" src={bandmemberJPG} ></Image>
                </a>
                <Fade  in={openMember3}>
                    <div id="openMember3">
                        <p>Bass player</p>
                        <p>Loves math</p>
                        <p>Member since 2005</p>
                    </div>
                </Fade>
            </Col>
        </Row>
    );
}