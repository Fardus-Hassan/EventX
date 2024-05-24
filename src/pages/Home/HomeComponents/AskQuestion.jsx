import React from 'react';

// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
// } from 'react-accessible-accordion';

// // Demo styles, see 'Styles' section below for some notes on use.
// import 'react-accessible-accordion/dist/fancy-example.css';

const AskQuestion = () => {
    return (
        <div className='pb-10 sm:pb-[100px] w-[95%] mx-auto max-w-[1440px]'>
            <div className="sm:text-left text-center">
                <h1 className="text-pmColor text-3xl sm:text-5xl font-bold font-poppins">Frequently Ask Question</h1>
                <p className="text-black dark:text-white mt-6 mb-10 max-w-[700px] font-medium sm:text-lg font-montserrat">Explore our comprehensive guide to frequently asked questions, covering to ensure your celebration exceeds expectations.</p>
            </div>
            <div className='flex lg:flex-row flex-col-reverse justify-center items-center sm:gap-10 gap-5'>
                <div className='flex-1 text-white'>
                    <div className="collapse collapse-plus bg-pmColor">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title lg:text-xl font-semibold font-poppins">
                            What types of events do you manage?
                        </div>
                        <div className="collapse-content">
                            <p className='font-montserrat text-sm'>We specialize in managing a wide range of events, including weddings, corporate gatherings, conferences, social parties, and more.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-pmColor sm:my-5 my-2">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title lg:text-xl font-semibold font-poppins">
                            How can I reserve a date for my event?
                        </div>
                        <div className="collapse-content">
                            <p className='font-montserrat text-sm'>You can easily reserve a date for your event by visiting our website and filling out our online booking form. Simply provide your event details, preferred date, and any specific requirements, and our team will assist you with the booking process.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-pmColor">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title lg:text-xl font-semibold font-poppins">
                            What services do you offer for event planning?
                        </div>
                        <div className="collapse-content">
                            <p className='font-montserrat text-sm'> We offer comprehensive event planning services, including venue selection, theme design, catering, entertainment booking, on-site logistics, and more. Our experienced team will work closely with you to tailor our services to meet your specific needs and ensure a successful event.</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[45%] lg:h-[500px] h-[400px] relative overflow-hidden rounded-xl'>
                    <img className='h-full object-cover rounded-xl transition-transform duration-500 transform hover:scale-110' src="https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>

            </div>
        </div>
    );
};

export default AskQuestion;