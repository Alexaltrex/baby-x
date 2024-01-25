import React from 'react';
import style from "./App.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import {clsx} from "clsx";

export const App = () => {
    return (
        <div className={style.app}>

            <div className={style.babyBgr}/>


            <a className={clsx(style.linkIcon, style.linkIcon_left)}
               href="#"
            >
                {svgIcons.close}
            </a>

            <a className={clsx(style.linkIcon, style.linkIcon_right)}
               href="#"
            >
                {svgIcons.telegram}
            </a>

            <div className={style.bottomContent}>

                <div className={style.descriptionGradient}/>


                <p className={style.description}>
                    Baby X, the cutest Baby on the Solana blockchain. Dive into a world where adorable charm meets
                    digital
                    innovation, all in one delightful package!
                </p>

                <div className={style.buttons}>
                    {
                        [
                            "Whitediaper",
                            "Birth Certificate",
                            "RoadMap",
                            "Buy $BABYX",
                        ].map((label, key) => (
                            <button key={key}
                                    className={style.button}
                            >
                                <p>{label}</p>
                            </button>
                        ))
                    }
                </div>

                <p className={style.address}>
                    ca: 0x0suahduhiqhgy9uasfhischia8968
                </p>

            </div>


            {/*<img src={titleImage} alt="" className={style.title}/>*/}

            {/*<img src={baby} alt="" className={style.baby}/>*/}

            {/*<div className={style.descriptionWrapper}>*/}
            {/*    <p className={style.description}>*/}
            {/*        Baby X, the cutest Baby on the Solana blockchain. Dive into a world where adorable charm meets*/}
            {/*        digital*/}
            {/*        innovation, all in one delightful package!*/}
            {/*    </p>*/}
            {/*</div>*/}


            {/*<div className={style.addressWrapper}>*/}
            {/*    <p className={style.address}>*/}
            {/*        ca: 0x0suahduhiqhgy9uasfhischia8968*/}
            {/*    </p>*/}
            {/*</div>*/}


        </div>
    );
}

