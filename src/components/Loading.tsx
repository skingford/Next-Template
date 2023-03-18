/*
 * @Author: kingford
 * @Date: 2023-03-19 02:17:31
 * @LastEditTime: 2023-03-19 02:59:34
 */
import styles from "@/styles/loading.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer: any = null;

    const start = () => {
      timer = setTimeout(() => {
        setLoading(true);
      }, 500);
    };

    const end = () => {
      timer && clearTimeout(timer);
      setLoading(false);
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router]);

  return (
    <div className={`${styles.loading} ${loading ? styles.show : ""}`}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
}

export default Loading;
