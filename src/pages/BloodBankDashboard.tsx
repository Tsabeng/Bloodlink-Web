import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Building2, Users, Droplet, TrendingUp, AlertTriangle } from "lucide-react";

const BloodBankDashboard = () => {
  const bloodInventory = [
    { type: "A+", units: 45, capacity: 100, percentage: 45, status: "normal" },
    { type: "A-", units: 12, capacity: 50, percentage: 24, status: "low" },
    { type: "B+", units: 38, capacity: 80, percentage: 47, status: "normal" },
    { type: "B-", units: 8, capacity: 40, percentage: 20, status: "critical" },
    { type: "O+", units: 72, capacity: 120, percentage: 60, status: "good" },
    { type: "O-", units: 15, capacity: 60, percentage: 25, status: "low" },
    { type: "AB+", units: 22, capacity: 50, percentage: 44, status: "normal" },
    { type: "AB-", units: 6, capacity: 30, percentage: 20, status: "critical" },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Blood Bank Dashboard</h1>
              <p className="text-sm text-muted-foreground">City Blood Bank - Main Branch</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="shadow-soft">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Units</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Droplet className="w-8 h-8 text-primary" />
                <span className="text-3xl font-bold">218</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Donors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Users className="w-8 h-8 text-secondary" />
                <span className="text-3xl font-bold">342</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-8 h-8 text-accent" />
                <span className="text-3xl font-bold">7</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                <span className="text-3xl font-bold">128</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Blood Inventory */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Blood Inventory</CardTitle>
            <CardDescription>Current stock levels by blood type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {bloodInventory.map((blood) => (
                <div key={blood.type} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-semibold w-12">{blood.type}</span>
                      <span className="text-sm text-muted-foreground">
                        {blood.units} / {blood.capacity} units
                      </span>
                    </div>
                    <Badge 
                      variant={
                        blood.status === "critical" ? "destructive" :
                        blood.status === "low" ? "secondary" :
                        blood.status === "good" ? "default" : "outline"
                      }
                    >
                      {blood.status === "critical" ? "Critical" :
                       blood.status === "low" ? "Low" :
                       blood.status === "good" ? "Good Stock" : "Normal"}
                    </Badge>
                  </div>
                  <Progress 
                    value={blood.percentage} 
                    className={
                      blood.status === "critical" ? "bg-destructive/20" :
                      blood.status === "low" ? "bg-accent/20" : ""
                    }
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest donations and distributions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { type: "donation", donor: "John Doe", bloodType: "O+", units: 1, time: "2 hours ago" },
                { type: "distribution", hospital: "General Hospital", bloodType: "A-", units: 3, time: "4 hours ago" },
                { type: "donation", donor: "Jane Smith", bloodType: "B+", units: 1, time: "6 hours ago" },
                { type: "distribution", hospital: "City Clinic", bloodType: "O-", units: 2, time: "8 hours ago" },
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">
                      {activity.type === "donation" 
                        ? `Donation from ${activity.donor}` 
                        : `Distribution to ${activity.hospital}`}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.bloodType} • {activity.units} {activity.units === 1 ? 'unit' : 'units'}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 flex gap-3">
              <Button className="flex-1">Record Donation</Button>
              <Button variant="outline" className="flex-1">Process Request</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BloodBankDashboard;
