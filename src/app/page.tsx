import Tool from "@/components/core/Tool/Tool";
import Image from "next/image";
import styles from './style.module.scss'
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function Home() {

  const tools = [
    {
      name: "Test Tool",
      description: "This is a testtool",
      imageUrl: ""
    }
  ]
  
  return (
    <>
      <main className={styles.container}>
        <div className={styles.searchWrapper}>
          <MagnifyingGlassIcon className={styles.searchIcon}></MagnifyingGlassIcon>
          <Input
            className={styles.search}
            type="text"
            placeholder="Search"
          ></Input>
        </div>
        <div className={styles.toolsContainer}>
          <Tool title="Hello World" description="Hello World Description"></Tool>
          <Tool title="Hello World" description="Hello World Description"></Tool>
          <Tool title="Hello World" description="Hello World Description"></Tool>
          <Tool title="Hello World" description="Hello World Description"></Tool>
          <Tool title="Hello World" description="Hello World Description"></Tool>
        </div>
      </main>
    </>
  );
}
