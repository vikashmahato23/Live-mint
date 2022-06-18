import { setSelectionRange } from "@testing-library/user-event/dist/utils"
import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./nav.css"

export const Navbar = ( {onClick} ) => {

  let navigate = useNavigate()
  const [style, setStyle] = useState({})
  const [y, setY] = useState(false);
  const [sign, setsign] = useState(true)
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (0 < window.scrollY) {
      setStyle({
        ...{
          navheight: "50px",
          width: "383px",
          imgwidth: "80px",
          exploremargin: "0px",
          imgmargin: "6px"

          //  justifycontent:"center",
        }
      })
      setY(true)

    } else if (0 == window.scrollY) {
      setStyle({
        ...{
          navheight: "70px",
          width: "383px",
          display: "flex",
          imgwidth: "150px",
          exploremargin: "13px",
          imgmargin: "4px"
          //  justifycontent:"center",
        }
      })
      setY(false)
    }
    // setY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e))
  }, []);
  // setY(window.scrollY);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  //  var d = new Date(dateString);
  const d = new Date();
  var month = monthNames[d.getMonth()];
  var dayName = days[d.getDay()]
  var date = d.getDate()
  var year = d.getFullYear()

  return (
    <header>
      <nav className="nav" style={{
        height: `${style.navheight}`,
        transition: "height 0.5s"
      }} >
        {/* onClick={onClick} */}
        <div className="explore" onClick={onClick} style={{ marginTop: `${style.exploremargin}`, transition: "margin-top 0.5s" }}><div className="toggle">
          <div className="togglelive">
            <div className="button1"></div>
            <div className="button2" style={{ width: "20px" }}></div>
            <div className="button3"></div>

          </div> 
          <div className="textbox">
            Explore
          </div> 
        </div>
        </div>
        <div className="logo"><div><img style={{ width: `${style.imgwidth}`, marginTop: `${style.imgmargin}`, transition: "width 0.5s" }} src="https://images.livemint.com/static/livemint-logo-v2.svg" alt="" /></div></div>
        <div className="notification">
         <div>
            <div style={{ display: "flex", flex: "1" }}>
              <div ><img className="img" style={{ width: "20px" }} src="https://img.icons8.com/ios-glyphs/344/search--v1.png" alt="" /></div>
              <div><img className="img" style={{ width: "20px" }} src="https://cdn-icons-png.flaticon.com/128/3602/3602145.png" alt="" /></div>
            </div>

            <div className="text epaper">e-paper</div>
            <div className="text sign" onClick={() => {
              setsign(false)
          
              navigate("/signin")
            }}>Sign in</div>
          </div>
          <div style={{ marginLeft: "80px", transition: `${y} 0.5` }}>{y ? null : dayName},
            {y ? null : date} {y ? null : month} {y ? null : year}</div>
        </div>
      </nav>
    </header>
  );
}
