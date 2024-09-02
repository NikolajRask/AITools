'use client'

import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useFormState } from 'react-dom'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

const Page = () => {

    const [description, setDescription] = useState("")

    return (
        <div className={styles.formWrapper}>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Submit an AI tool</h1>
                <form>
                    <Label>Tool Name</Label>
                    <Input placeholder="Name"/>

                    <Label>Tool Description 
                        <a style={{
                            color: description.length <= 100 ? 'black' : "red",
                            marginLeft: 4
                        }}>
                            ({description.length}/100)
                        </a>
                    </Label>
                    <Textarea placeholder="Description" style={{maxHeight: 100}} value={description} onChange={(e) => setDescription(e.target.value)} />
                    
                    <Label>Website URL</Label>
                    <Input placeholder="Website URL" type="text" />
                    
                    <Label>Category</Label>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent className={styles.category}>
                            <SelectGroup>
                                <SelectLabel>Categories</SelectLabel>
                                <SelectItem value="apple">Free</SelectItem>
                                <SelectItem value="banana">Freemium</SelectItem>
                                <SelectItem value="blueberry">Paid</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Label>Full Name</Label>
                    <Input placeholder="Full Name" type="text" />

                    <Label>Email</Label>
                    <Input placeholder="Email" type="email" />

                    <div className={styles.submitBtnWrapper}>
                        <Button className={styles.submitBtn}>Submit Tool</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Page