'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"

export function NoteCreatingModel() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const title = formData.get("title") as string
        const content = formData.get("content") as string
        try {
            const res = await axios.post("/api/notes", { title, content });
            console.log(res);
        } catch (error) {
            console.log(error)
        }


    }
    return (
        <Dialog>

            <DialogTrigger asChild>
                <Button variant="outline">Create Note</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create Note</DialogTitle>
                    <DialogDescription>
                        Enter title and content for creating a new Note
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" name="title" placeholder="Enter title" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="content">Content</Label>
                            <Input id="content" name="content" placeholder="Enter Content" />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" >Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>

        </Dialog>
    )
}
