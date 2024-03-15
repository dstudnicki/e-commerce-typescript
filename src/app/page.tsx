import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col px-4 md:px-8 lg:px-12 xl:px-24">
            <h1 className="mb-6 mt-6 sm:mt-0 font-bold text-3xl">Dashboard</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-md font-medium">Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-0 text-2xl font-bold">$54,321.90</CardContent>
                    <CardContent>
                        <p className="text-xs text-muted-foreground">+20,1% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-md font-medium">Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-0 text-2xl font-bold">$54,321.90</CardContent>
                    <CardContent>
                        <p className="text-xs text-muted-foreground">+20,1% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-md font-medium">Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-0 text-2xl font-bold">$54,321.90</CardContent>
                    <CardContent>
                        <p className="text-xs text-muted-foreground">+20,1% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-md font-medium">Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-0 text-2xl font-bold">$54,321.90</CardContent>
                    <CardContent>
                        <p className="text-xs text-muted-foreground">+20,1% from last month</p>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
