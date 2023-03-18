/*
 * @Author: kingford
 * @Date: 2023-03-19 02:16:05
 * @LastEditTime: 2023-03-19 02:16:13
 */
import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <div>
      <p>The page you requested could not be found.</p>
      <p>
        Please go back to{" "}
        <Link href="/">
          <a>the home page</a>
        </Link>
        .
      </p>
    </div>
  );
}

export default NotFound;
