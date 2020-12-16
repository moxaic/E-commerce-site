import React from "react";
import styles from "./ProductSpecs.module.css";

export default function ProductSpecs() {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img
          className={styles.image}
          src="https://image.winudf.com/v2/image1/Y29tLkdyZWF0bWluZHMuR3VpdGFyd2FsbHBhcGVyc19zY3JlZW5fMF8xNTQyNjEzNTQwXzA3Nw/screen-0.jpg?fakeurl=1&type=.jpg"
          alt="display"
        />
      </div>
      <div className={styles.specs}>
        <h1>Acoustic Guitar</h1>
        <h3>⭐⭐⭐⭐⭐</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          animi modi optio molestias veniam quaerat non est! Adipisci veniam
          tempora sint rerum eveniet qui obcaecati nostrum, consequuntur,
          dolorem quod optio?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          ipsam quo ea, nostrum cumque placeat explicabo aut laudantium.
          Blanditiis sequi reprehenderit voluptate fugiat eveniet! At earum
          soluta aperiam ut inventore.
        </p>
      </div>
      <div className={styles.cart}></div>
    </div>
  );
}
