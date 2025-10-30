import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Droplet, Heart, MapPin, Clock } from "lucide-react";

const DonorDashboard = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Droplet className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Donor Dashboard</h1>
                <p className="text-sm text-muted-foreground">Welcome back, John Doe</p>
              </div>
            </div>
            <Badge className="bg-primary text-primary-foreground">A+</Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-soft">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Donations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Heart className="w-8 h-8 text-primary" />
                <span className="text-3xl font-bold">12</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Lives Saved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Heart className="w-8 h-8 text-accent fill-accent" />
                <span className="text-3xl font-bold">36</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Next Eligible</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Calendar className="w-8 h-8 text-secondary" />
                <span className="text-3xl font-bold">45</span>
                <span className="text-muted-foreground">days</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Appointment */}
        <Card className="shadow-medium border-primary/20">
          <CardHeader>
            <CardTitle>Upcoming Appointment</CardTitle>
            <CardDescription>Your next scheduled donation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">March 15, 2024</p>
                <p className="text-sm text-muted-foreground">10:00 AM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">City Blood Bank</p>
                <p className="text-sm text-muted-foreground">123 Main Street, Downtown</p>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <Button className="flex-1">View Details</Button>
              <Button variant="outline" className="flex-1">Reschedule</Button>
            </div>
          </CardContent>
        </Card>

        {/* Donation History */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Recent Donations</CardTitle>
            <CardDescription>Your donation history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: "Jan 15, 2024", location: "City Blood Bank", status: "Completed" },
                { date: "Oct 20, 2023", location: "Regional Hospital", status: "Completed" },
                { date: "Jul 10, 2023", location: "City Blood Bank", status: "Completed" },
              ].map((donation, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{donation.date}</p>
                      <p className="text-sm text-muted-foreground">{donation.location}</p>
                    </div>
                  </div>
                  <Badge variant="secondary">{donation.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DonorDashboard;
