import React from 'react'
import Button from './Button'

function Ready() {
    return (
        <div>
            <h2 className="font-parisienne text-[2rem] font-semibold p-4 text-center lg:text-[3rem] lg:my-16">Prêt(e) à libérer vos émotions et retrouver votre bien-être ?</h2>
                <div className=" block lg:flex lg:flex-col lg:items-center lg:gap-10 lg:bg-rose-50 lg:backdrop-blur-sm lg:p-8 lg:rounded-sm lg:shadow-xl lg:mt-10 lg:text-shadow">
                    <p className="font-oldStandard pt-2 text-justify lg:text-[1.2rem] lg:w-[50vw] lg:text-center">Si vous avez des questions ou souhaitez réserver une séance, n&apos;hésitez pas à me contacter. Ensemble, nous travaillerons pour que vous retrouviez sérénité et équilibre dans votre quotidien.</p>
                    <div className="flex justify-center mt-5">
                        <Button to='/mon_histoire#contact' description='Contactez-moi...' />
                    </div>
                    
                </div>
        </div>
    )
}

export default Ready