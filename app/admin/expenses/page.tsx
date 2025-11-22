import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExpensesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Expenses</h1>
      <Card className="rounded-xl border-border shadow-sm">
        <CardHeader>
          <CardTitle>Expense Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Track and manage petrol station expenses</p>
        </CardContent>
      </Card>
    </div>
  );
}
