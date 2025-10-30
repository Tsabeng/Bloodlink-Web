import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Activity, Search, AlertCircle, CheckCircle, Clock } from "lucide-react";

const DoctorDashboard = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
              <Activity className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Doctor Dashboard</h1>
              <p className="text-sm text-muted-foreground">Dr. Sarah Johnson</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="shadow-soft">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">8</div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">3</div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Fulfilled</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">42</div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">15</div>
            </CardContent>
          </Card>
        </div>

        {/* Blood Availability Search */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Check Blood Availability</CardTitle>
            <CardDescription>Search for available blood types across blood banks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input placeholder="Search blood type (e.g., A+, O-, AB+)" />
              <Button>
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
            <div className="grid md:grid-cols-4 gap-4 pt-4">
              {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((type) => (
                <div key={type} className="p-4 rounded-lg bg-muted/50 text-center">
                  <p className="text-2xl font-bold text-primary">{type}</p>
                  <p className="text-sm text-muted-foreground mt-1">Available</p>
                  <p className="text-xs text-muted-foreground">{Math.floor(Math.random() * 50) + 10} units</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Requests */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Recent Blood Requests</CardTitle>
            <CardDescription>Your transfusion requests and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { patient: "Patient #1234", bloodType: "O-", units: 2, status: "fulfilled", urgency: "urgent" },
                { patient: "Patient #1235", bloodType: "A+", units: 3, status: "pending", urgency: "normal" },
                { patient: "Patient #1236", bloodType: "B+", units: 1, status: "processing", urgency: "normal" },
                { patient: "Patient #1237", bloodType: "AB-", units: 2, status: "pending", urgency: "urgent" },
              ].map((request, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-medium">{request.patient}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-muted-foreground">
                          {request.bloodType} • {request.units} units
                        </span>
                        {request.urgency === "urgent" && (
                          <Badge variant="destructive" className="text-xs">Urgent</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {request.status === "fulfilled" && (
                      <>
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <Badge variant="secondary">Fulfilled</Badge>
                      </>
                    )}
                    {request.status === "pending" && (
                      <>
                        <AlertCircle className="w-5 h-5 text-accent" />
                        <Badge className="bg-accent text-accent-foreground">Pending</Badge>
                      </>
                    )}
                    {request.status === "processing" && (
                      <>
                        <Clock className="w-5 h-5 text-primary" />
                        <Badge variant="outline">Processing</Badge>
                      </>
                    )}
                    <Button size="sm" variant="outline">Details</Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Button className="w-full">New Blood Request</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DoctorDashboard;
