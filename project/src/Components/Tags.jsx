import React from "react";
import myimage from './react.svg'

function Tags(){
    const styles = {
        color : "grey",
        backgroundColor : "pink",
        border : "2px solid black",
        backgroundImage : `url(${myimage})`,
        borderStyle : "dashed solid dotted double",
        borderWidth : "4px"
    }
    return(
        <>
            <b style={{color:"blue", backgroundColor:"yellow"}}>Deshik</b> 
   <strong style={styles}>Mohan</strong>
   <i>DivyaSree</i>
   <em>Yoshitha</em>
   <u>Revanth</u>
   <ins>Janardhan</ins>
   <bdo dir="rtl">Pavani</bdo>
   <address>4303 4Th floor AIML Section</address>
   <small>Nagamani</small>
   <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint recusandae, eligendi inventore dignissimos magnam consequuntur dolores praesentium quae distinctio adipisci!</blockquote>
   <q>Lorem ipsum dolor sit amet.</q>
   <abbr title="HYPER TRANSFER MARKUP LANGUAGE">HTML</abbr>
   <cite>HELLO</cite>
        <h4>AIML-A</h4>
        <h4>FSD</h4>
                <div>Element1</div>
                <hr/>
        <p>Lorem ipsum dolor sit amet.</p>
        <span>Element2</span>
        <pre>  Baaji</pre>
        <b>Pavani</b>
        <mark>956</mark>
        <br/>
        <del>956</del>
        <br />
        <br />
        <br /><br /><br />
        <h1> TABLES</h1>
           <table border="1">
        <caption>Student Details</caption>
        <tr>
            <th>Name</th>
            <th>Name</th>
            <th>Branch</th>       
        </tr>
        <tr>
            <td>Vamsi</td>
            <td>39</td>
            <td>A</td>

        </tr>
        <tr>
            <td>Hasmin</td>
            <td>22</td>
            <td>B sec</td>
        </tr>
    </table>
            <br />
        <br />
        <br /><br /><br />
        <h1> LISTS</h1>
        
         <ol>
        <li>Tarun</li>
        <li>Vamsi</li>
        <li>Vikki</li>
        <li>Poorna</li>
    </ol>
    <ul type="none">
        <li>Yoshitha</li>
        <li>Divya</li>
        <li>Heena</li>
    </ul>
    <dl>
        <dt>HTML</dt>
        <dd>HYper.......</dd>
    </dl>

                <br />
        <br />
        <br /><br /><br />
        <hr/>
        <h1>FORMS</h1>
                    <form>
        <fieldset>
            <legend>User Information</legend>
        <label>Full Name:</label>
        <input type="text" name="fullname"/>
        <br/><br/>
        <label>Email:</label>
        <input type="email" name="email" required placeholder="enter your name"/>
        <br/><br/>
        <label>Password</label>
        <input type="password" name="password"/>
        <br/><br/>
        </fieldset>
        <label>Age</label>
        <input type="number" name="age" min="1" max="100"/>
        <br/><br/>
        <label>DOB</label>
        <input type="date" name="dob"/>
       <br/><br/>
        <label>Color</label>
        <input type="color" name="color"/>
       <br/><br/>
        <label>Range</label>
        <input type="range" name="range"/>
       <br/><br/>
        <label>Upload file</label>
        <input type="file" name="resume"/>
        <br/><br/>
        <label>Information</label>
        <input type="hide" name="info"/>
       <br/><br/>
        <label>Gender</label>
        <input type="radio" name="gender" value="Male"/>Male
        <input type="radio" name="gender" value="Female"/>female
       <br/><br/>
        <label>Skills</label>
        <input type="checkbox" name="skills" value="HTML"/>HTML
        <input type="checkbox" name="skills" value="CSS"/>CSS
        <br/><br/>
        <label >Courses:</label>
        <select name="course" >
            <option value="">--select option--</option>
            <option value="B.tech">B.tech</option>
            <option value="B.com">B.com</option>
            <option value="BSC">BSC</option>
        </select>
  <br/><br/>
        <label>Address</label>
        <textarea name="address" rows="10" cols="20"></textarea>
      <br/><br/>
        <input type="submit"/>
        <input type="reset"/>
        <input type="button" value="Done"/>
        <button>Clear</button>
        </form>
        <hr/>
        <hr/>
        <img src={myimage} alt="no"/>
        <br/>
        <hr/>
        <a href="https://www.google.com">open google</a>
        <hr/>
        <a href="/index.html">index file</a>
        </>
    )
}
export default Tags;