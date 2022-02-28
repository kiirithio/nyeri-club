import styles from "./Membership.module.css";
import backImage from "../../assets/img1.jpeg";
import backward from "../../assets/backward.svg"
import forward from "../../assets/forward.svg"

function Membership(props) {
  return (
    <main
      className={styles.main}
      style={{ backgroundImage: `url(${backImage})` }}
    >
      <div className={styles.background}>
        <div className={styles.login}>
          <h2 className={styles.heading}>Membership</h2>
          <form className={styles.form}>
            <div className={styles.inputCont}>
              <label className={styles.label}>Members Log In</label>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputCont}>
              <label className={styles.label}>Password</label>
              <input className={styles.input} type="password" />
            </div>
            <button className={styles.button}>Login</button>
            <a className={styles.link} href="">
              Forgotten your password?
            </a>
            <div className={styles.Signup}>
              <label id={styles.label}>Not a member?</label>
              <a className={styles.link} href="">
                Signup
              </a>
            </div>
          </form>
        </div>

        <div className={styles.description}>
          <div className={styles.text}>
            <h3>Membership Description</h3>
            <p className={styles.p}>
              Your can be a member of Nyeri Golf Club today and for free! By
              being a member, you can be an active participant on this club
            </p>

            <p className={styles.p}>
              To sign up click on the link to the left and fill in the required
              details.
            </p>

            <p className={styles.p}>It's always good to grow</p>

            <p className={styles.p}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              eveniet illo nobis ipsum dolores neque recusandae fugit veritatis
              animi, cupiditate dolorem unde quasi eos, iste corporis velit
              cumque sapiente aspernatur.
            </p>

            <p className={styles.p}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate delectus fugit officiis esse laudantium impedit facilis
              inventore, dolores veritatis, quo tenetur hic quaerat omnis, nulla
              animi. Eius dignissimos aperiam iure!
            </p>

            <p className={styles.p}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor non
              aperiam minus harum error ducimus impedit id facere modi
              perspiciatis ipsam iure tempore, delectus tempora, cum eligendi
              officiis laudantium libero!
            </p>

            <p className={styles.p}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              alias dicta veniam! Nesciunt, ratione quae molestiae iste ducimus
              aliquam distinctio corrupti, recusandae sint eum qui voluptatum
              dolores vel repudiandae voluptatem?
            </p>
          </div>

          <div className={styles.icons}>
            <img src={backward} id={styles.backward} />
            <img src={forward} id={styles.forward} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Membership;
