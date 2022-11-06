import React from "react";
import './styles.css'
import MainHorseImage from './Assets/Rae\ Riding\ Lessons\ Logo\ _2_.png'
import Trainer1Image from './Assets/FemaleTrainer1.jpg'
import Trainer2Image from './Assets/MaleTrainer1.jpg'
import Trainer3Image from './Assets/FemaleTrainer2.jpg'
import Trainer4Image from './Assets/MaleTrainer2.jpg'
import PageTitle from "./PageTitle";
// const MainHorseStyle = {
//     position: 'absolute',
//     marginTop: '300px',
// }

const AboutUs = () => {
    return (
        <div className="backGround">
                <PageTitle name="AboutUs" />
                <p className="aboutUsPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Lectus nulla at volutpat diam. Sed odio morbi quis commodo odio. Enim diam vulputate ut pharetra sit amet. 
                    Ut etiam sit amet nisl purus in mollis. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. 
                    Nunc mi ipsum faucibus vitae aliquet nec. Ridiculus mus mauris vitae ultricies leo integer. In ornare quam viverra 
                    orci sagittis eu volutpat odio facilisis. Scelerisque purus semper eget duis at tellus. Donec enim diam vulputate ut 
                    pharetra sit amet. <br /><br />
                    Morbi quis commodo odio aenean sed adipiscing. Ullamcorper morbi tincidunt ornare massa eget. 
                    Sagittis orci a scelerisque purus semper eget. Platea dictumst quisque sagittis purus sit. Non curabitur gravida 
                    arcu ac tortor dignissim. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Elementum eu facilisis sed odio. 
                    Proin libero nunc consequat interdum varius sit amet.</p>
                <img src={MainHorseImage} className='aboutUsPic' alt="Girl on Horse" />
                <div className="aboutUsSubTitle">
                    Meet Our Team
                    <hr className="titleunderlineAU"/>
                </div>

                <div>
                    <img src={Trainer1Image} className='trainerPic1' alt="Female trainer1" />
                    <title className="trainerTitle1">Rae Doe</title>
                    <p className="trainerPara1">Sed odio morbi quis commodo odio. Enim diam vulputate ut pharetra sit amet. 
                        Ut etiam sit amet nisl purus in mollis. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris.
                        Nunc mi ipsum faucibus vitae aliquet nec. Ridiculus mus mauris vitae ultricies leo integer. In ornare quam viverra 
                        orci sagittis eu volutpat odio facilisis.
                    </p>
                </div>

                <div>
                    <img src={Trainer2Image} className='trainerPic2' alt="Male trainer1" />
                    <title className="trainerTitle2">John Doe</title>
                    <p className="trainerPara2">Sed odio morbi quis commodo odio. Enim diam vulputate ut pharetra sit amet. 
                        Ut etiam sit amet nisl purus in mollis. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris.
                        Nunc mi ipsum faucibus vitae aliquet nec. Ridiculus mus mauris vitae ultricies leo integer. In ornare quam viverra 
                        orci sagittis eu volutpat odio facilisis.
                    </p>
                </div>

                <div>
                    <img src={Trainer3Image} className='trainerPic3' alt="Female trainer2" />
                    <title className="trainerTitle3"rTitle3>Jane Doe</title>
                    <p className="trainerPara3">Sed odio morbi quis commodo odio. Enim diam vulputate ut pharetra sit amet. 
                        Ut etiam sit amet nisl purus in mollis. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris.
                        Nunc mi ipsum faucibus vitae aliquet nec. Ridiculus mus mauris vitae ultricies leo integer. In ornare quam viverra 
                        orci sagittis eu volutpat odio facilisis.
                    </p>
                </div>

                <div>
                    <img src={Trainer4Image} className='trainerPic4' alt="Male trainer2" />
                    <title className="trainerTitle4">Jack Doe</title>
                    <p className="trainerPara4">Sed odio morbi quis commodo odio. Enim diam vulputate ut pharetra sit amet. 
                        Ut etiam sit amet nisl purus in mollis. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris.
                        Nunc mi ipsum faucibus vitae aliquet nec. Ridiculus mus mauris vitae ultricies leo integer. In ornare quam viverra 
                        orci sagittis eu volutpat odio facilisis.
                    </p>
                </div>
                
        </div>
        
    );
}

export default AboutUs;