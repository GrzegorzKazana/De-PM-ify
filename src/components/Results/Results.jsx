import React from "react";
import styles from "./Results.module.scss";

const Results = ({ open }) => (
  <main className={styles.Resuls__Wrapper}>
    <section
      className={`${styles.Results__Body} ${
        open ? styles.Results__BodyOpen : styles.Results__BodyClosed
      }`}
    >
      <h1>Some random thing</h1>
      <h5>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        molestie condimentum diam, nec finibus purus aliquam et. Vivamus
        bibendum sagittis molestie. Mauris est mi, hendrerit sagittis sapien
        eleifend, mollis sollicitudin enim. Quisque urna mi, tincidunt vitae
        diam efficitur, efficitur imperdiet turpis. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed
        molestie ex urna. Morbi pellentesque sagittis justo nec convallis. Etiam
        semper est nec sapien blandit venenatis vitae sed nunc. Integer vehicula
        odio eget nisi convallis tincidunt. Donec id neque euismod, viverra
        tortor et, volutpat dui. Quisque nec pellentesque eros, sed pellentesque
        nisl. Fusce at nisi pulvinar, aliquam leo sed, cursus dolor. Nullam
        vehicula eros nec accumsan faucibus. Pellentesque convallis ligula ac
        lacus faucibus, quis venenatis neque tristique. Maecenas varius, ante
        volutpat porta vehicula, justo ante ultrices orci, nec viverra ipsum
        lectus at eros. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Aliquam.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aliquam molestie condimentum diam, nec
        finibus purus aliquam et. Vivamus bibendum sagittis molestie. Mauris est
        mi, hendrerit sagittis sapien eleifend, mollis sollicitudin enim.
        Quisque urna mi, tincidunt vitae diam efficitur, efficitur imperdiet
        turpis. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Sed molestie ex urna. Morbi pellentesque
        sagittis justo nec convallis. Etiam semper est nec sapien blandit
        venenatis vitae sed nunc. Integer vehicula odio eget nisi convallis
        tincidunt. Donec id neque euismod, viverra tortor et, volutpat dui.
        Quisque nec pellentesque eros, sed pellentesque nisl. Fusce at nisi
        pulvinar, aliquam leo sed, cursus dolor. Nullam vehicula eros nec
        accumsan faucibus. Pellentesque convallis ligula ac lacus faucibus, quis
        venenatis neque tristique. Maecenas varius, ante volutpat porta
        vehicula, justo ante ultrices orci, nec viverra ipsum lectus at eros.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Aliquam.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aliquam molestie condimentum diam, nec finibus purus
        aliquam et. Vivamus bibendum sagittis molestie. Mauris est mi, hendrerit
        sagittis sapien eleifend, mollis sollicitudin enim. Quisque urna mi,
        tincidunt vitae diam efficitur, efficitur imperdiet turpis. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Sed molestie ex urna. Morbi pellentesque sagittis justo nec
        convallis. Etiam semper est nec sapien blandit venenatis vitae sed nunc.
        Integer vehicula odio eget nisi convallis tincidunt. Donec id neque
        euismod, viverra tortor et, volutpat dui. Quisque nec pellentesque eros,
        sed pellentesque nisl. Fusce at nisi pulvinar, aliquam leo sed, cursus
        dolor. Nullam vehicula eros nec accumsan faucibus. Pellentesque
        convallis ligula ac lacus faucibus, quis venenatis neque tristique.
        Maecenas varius, ante volutpat porta vehicula, justo ante ultrices orci,
        nec viverra ipsum lectus at eros. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Aliquam. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie
        condimentum diam, nec finibus purus aliquam et. Vivamus bibendum
        sagittis molestie. Mauris est mi, hendrerit sagittis sapien eleifend,
        mollis sollicitudin enim. Quisque urna mi, tincidunt vitae diam
        efficitur, efficitur imperdiet turpis. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Sed molestie ex
        urna. Morbi pellentesque sagittis justo nec convallis. Etiam semper est
        nec sapien blandit venenatis vitae sed nunc. Integer vehicula odio eget
        nisi convallis tincidunt. Donec id neque euismod, viverra tortor et,
        volutpat dui. Quisque nec pellentesque eros, sed pellentesque nisl.
        Fusce at nisi pulvinar, aliquam leo sed, cursus dolor. Nullam vehicula
        eros nec accumsan faucibus. Pellentesque convallis ligula ac lacus
        faucibus, quis venenatis neque tristique. Maecenas varius, ante volutpat
        porta vehicula, justo ante ultrices orci, nec viverra ipsum lectus at
        eros. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Aliquam.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aliquam molestie condimentum diam, nec finibus purus
        aliquam et. Vivamus bibendum sagittis molestie. Mauris est mi, hendrerit
        sagittis sapien eleifend, mollis sollicitudin enim. Quisque urna mi,
        tincidunt vitae diam efficitur, efficitur imperdiet turpis. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Sed molestie ex urna. Morbi pellentesque sagittis justo nec
        convallis. Etiam semper est nec sapien blandit venenatis vitae sed nunc.
        Integer vehicula odio eget nisi convallis tincidunt. Donec id neque
        euismod, viverra tortor et, volutpat dui. Quisque nec pellentesque eros,
        sed pellentesque nisl. Fusce at nisi pulvinar, aliquam leo sed, cursus
        dolor. Nullam vehicula eros nec accumsan faucibus. Pellentesque
        convallis ligula ac lacus faucibus, quis venenatis neque tristique.
        Maecenas varius, ante volutpat porta vehicula, justo ante ultrices orci,
        nec viverra ipsum lectus at eros. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Aliquam.Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie
        condimentum diam, nec finibus purus aliquam et. Vivamus bibendum
        sagittis molestie. Mauris est mi, hendrerit sagittis sapien eleifend,
        mollis sollicitudin enim. Quisque urna mi, tincidunt vitae diam
        efficitur, efficitur imperdiet turpis. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Sed molestie ex
        urna. Morbi pellentesque sagittis justo nec convallis. Etiam semper est
        nec sapien blandit venenatis vitae sed nunc. Integer vehicula odio eget
        nisi convallis tincidunt. Donec id neque euismod, viverra tortor et,
        volutpat dui. Quisque nec pellentesque eros, sed pellentesque nisl.
        Fusce at nisi pulvinar, aliquam leo sed, cursus dolor. Nullam vehicula
        eros nec accumsan faucibus. Pellentesque convallis ligula ac lacus
        faucibus, quis venenatis neque tristique. Maecenas varius, ante volutpat
        porta vehicula, justo ante ultrices orci, nec viverra ipsum lectus at
        eros. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Aliquam.
      </h5>
    </section>
  </main>
);
export default Results;
