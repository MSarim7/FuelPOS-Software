import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EmployersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Employers</h1>
      <Card className="rounded-xl border-border shadow-sm">
        <CardHeader>
          <CardTitle>Employer Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Track and manage petrol station Employers</p>
        </CardContent>
      </Card>
    </div>
  );
}
