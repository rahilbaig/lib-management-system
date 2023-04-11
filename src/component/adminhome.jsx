import '../styles/adminhome.css'
const AdminHome = () => {
    return (
        <div className="adminhome">
            <div className="nbnb">
                <div className="back">
                    <div className="kjk">
                        <p> NatGeo Photographer</p>
                    </div>
                    <div className="lljj">
                        <p>On Thursday, April 20 at 7:00 pm, hear from award-winning photographer Pete McBride on the value of <br /> protecting our lands and waters.</p>
                    </div>
                    <button>
                        Register Here
                    </button>
                </div>
            </div>
            <div className="jbj">
                <img height={"500px"} width={"1000px"} src="https://www.greenwichlibrary.org/wp-content/uploads/2023/03/Resume-Help-2048x800.jpg" alt="" />
                <div className="kjblj">
                    <div className="lllkkk">
                        <h1>Resume Writing Help</h1>
                        <p>Do you find yourself back on the job market? Get help writing or
                            tidying up your resume <br /> from Greenwich Library’s Business Librarian.
                            They’ll help you format and include key points <br />  so that you’ll land the interview!</p>
                        <button> Book an Appointment</button>
                    </div>
                </div>
            </div>
            <div className="mnmnmn">
                <h1>April Events</h1>
                <p>Join us for a full slate of programming and events at the
                    Greenwich Libraries! These printable one-page Library <br />
                    calendars are fridge-ready.</p>
                <button>Printable Event Calander</button>
            </div>
            <div className="boox">
                <div className="s1s1">
                    <h1>Tax Help</h1>
                    <p>On Saturday, April 8 from 9:00 am – 2:00 pm, drop in for one of our last sessions of one-on-one tax prep assistance with AARP volunteers.</p>
                    <a href="">Mark Your Calendar</a>
                </div>
                <div className="s1s1">
                    <h1>Interviewing</h1>
                    <p>On Monday, April 10 at 1:00 pm, give yourself the edge over the other candidates during the interview process with career coach Noelle Gross.</p>
                    <a href="">Register Here</a>
                </div>
                <div className="s1s1">
                    <h1>Senior Living</h1>
                    <p>On Wednesday, April 12 at 6:00 pm, learn about different options, best practices, and resources available for the care of a senior loved one.</p>
                    <a href="">Register Here</a>
                </div>
                <div className="s1s1">
                    <h1>Grow a Plant from Seed</h1>
                    <p>On Thursday, April 13 at 7:00 pm at Byram Shubert Library, learn the steps from seed to garden with Ellen Zampino.</p>
                    <a href="">Mark Your Calendar</a>
                </div>
                <div className="bbb">
                <img height={"400px"} width={"1000px"} src="https://www.greenwichlibrary.org/wp-content/uploads/2023/03/Volunteer-2048x800.jpg" alt="" />
                <div className="kjblj">
                    <div className="lllkkk">
                        <h1>Become a Volunteer</h1>
                        <p>Find Your Place! Become a part of the amazing Friends of Greenwich Library team to help bring exceptional programming and resources to your community.</p>
                        <button>LEARN MORE</button>
                    </div>
                </div>
            </div>
            </div>
            <div className="hbhb">
                <p>Michael Embry</p>
                <h3>I don’t have to look far to find treasures. I discover them every <br /> time I visit a library.</h3>
            </div>
            <div className="lkmk">
                <div style={{backgroundColor:"#4DB79F"}} className="jhk">
                    <h3>Sign Up for Our Newsletter</h3>
                    <p>Stay up to date with library events, new <br /> books, or what's going on in our <br /> community.</p>
                    <button>Sign Up</button>
                </div>
                <div style={{backgroundColor:" #019875"}} className="jhk">
                    <h3>Support The Library</h3>
                    <p>Donate today and help ensure that the Library <br /> continues to evolve to meet the needs of our <br /> community.</p>
                    <button>Donate Now</button>
                </div>
            </div>
        </div>
    );
}

export default AdminHome;