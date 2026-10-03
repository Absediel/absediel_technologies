"use client";
import { AnimatePresence,motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";

const LimitReachedModal=({open,onClose})=>{

    return(

        <AnimatePresence>

            {

                open &&

                <motion.div

                    className="modal-overlay"

                    initial={{opacity:0}}

                    animate={{opacity:1}}

                    exit={{opacity:0}}

                    onClick={onClose}

                >

                    <motion.div

                        className="modal-card warning"

                        initial={{

                            opacity:0,

                            y:40,

                            scale:.85

                        }}

                        animate={{

                            opacity:1,

                            y:0,

                            scale:1

                        }}

                        exit={{

                            opacity:0,

                            scale:.9

                        }}

                        onClick={(e)=>e.stopPropagation()}

                    >

                        <FaExclamationTriangle

                            className="modal-icon"

                        />

                        <h2>

                            Daily Limit Reached

                        </h2>

                        <p>

                            You have reached your daily limit.

                            Please try again tomorrow.

                        </p>

                        <button

                            className="modal-btn"

                            onClick={onClose}

                        >

                            Okay

                        </button>

                    </motion.div>

                </motion.div>

            }

        </AnimatePresence>

    );

};

export default LimitReachedModal;