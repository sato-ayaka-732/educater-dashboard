import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "研修生", value: "—", hint: "進捗管理対象（除外フラグ除く）" },
  { label: "進行中の課題", value: "—", hint: "今週期限の課題件数" },
  { label: "期限超過", value: "—", hint: "提出が止まっている課題" },
  { label: "今週の日報提出率", value: "—", hint: "提出件数 / 想定提出数" },
];

export default function DashboardPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Educater Dashboard</p>
          <h1 className="text-2xl font-semibold tracking-tight">
            ダッシュボード（仮）
          </h1>
        </div>
        <Badge variant="secondary">MVP / placeholder</Badge>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader>
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle className="text-3xl tabular-nums">
                {stat.value}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">
              {stat.hint}
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>直近の課題期限</CardTitle>
            <CardDescription>
              実装後はSupabaseから取得した期限一覧を表示します
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            まだデータはありません。
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>研修生サマリー</CardTitle>
            <CardDescription>
              担当営業 / 担当講師 / メンタリング担当別の人数を表示予定
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            まだデータはありません。
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
