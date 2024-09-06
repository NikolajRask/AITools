import Tool from "@/components/core/Tool/Tool";
import Image from "next/image";
import styles from './style.module.scss'
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { aiToolCategories } from "@/content/categories";
import { api } from "@/utils/trpc";

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
            type="search"
            placeholder="Search"
          ></Input>

          <div className={styles.flex} style={{
            marginBottom: 10,
          }}>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent className={styles.category}>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  {
                    aiToolCategories.map((category, index) => {
                      return <SelectItem value={category}>{category}</SelectItem>
                    })
                  }
                </SelectGroup>
              </SelectContent>
            </Select> 

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter after type" />
              </SelectTrigger>
              <SelectContent className={styles.category}>
                <SelectGroup>
                  <SelectLabel>Type</SelectLabel>
                  <SelectItem value="apple">Free</SelectItem>
                  <SelectItem value="banana">Freemium</SelectItem>
                  <SelectItem value="blueberry">Paid</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>    
          </div>      
        </div>
        <h3 className={styles.toolsTitle}>Featured</h3>
        <div className={styles.toolsContainer}>
          <Tool title="Messenger" featured={true} description="Messenger is Meta's app for texting, voice/video calls, and media sharing. Originally part of Facebook, it now stands alone."></Tool>
          <Tool title="Messenger" featured={true} description="Messenger is Meta's app for texting, voice/video calls, and media sharing. Originally part of Facebook, it now stands alone."></Tool>
          <Tool title="Messenger" featured={true} description="Messenger is Meta's app for texting, voice/video calls, and media sharing. Originally part of Facebook, it now stands alone."></Tool>
        </div>

        <h3 className={styles.toolsTitle}>Others</h3>

        <div className={styles.toolsContainer}>
          <Tool title="Messenger" description="Messenger is Meta's app for texting, voice/video calls, and media sharing. Originally part of Facebook, it now stands alone."></Tool>
          <Tool title="Messenger" description="Messenger is Meta's app for texting, voice/video calls, and media sharing. Originally part of Facebook, it now stands alone."></Tool>
          <Tool title="Messenger" description="Messenger is Meta's app for texting, voice/video calls, and media sharing. Originally part of Facebook, it now stands alone."></Tool>
        </div>

      </main>
    </>
  );
}
