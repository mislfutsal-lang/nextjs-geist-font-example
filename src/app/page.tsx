// app/page.tsx
interface Player {
  name: string;
  group: string;
  sessions: number;
}

// Example data — replace with your actual DB/API data
const players: Player[] = [
  { name: "John", group: "A", sessions: 5 },
  { name: "Alex", group: "A", sessions: 3 },
  { name: "Mike", group: "B", sessions: 4 },
  { name: "Lucas", group: "B", sessions: 6 },
  { name: "Dan", group: "C", sessions: 2 },
];

// Function to group players and count sessions
function groupPlayersByGroup(data: Player[]) {
  const grouped: Record<
    string,
    { players: string[]; totalSessions: number }
  > = {};

  data.forEach((p) => {
    if (!grouped[p.group]) {
      grouped[p.group] = { players: [], totalSessions: 0 };
    }
    grouped[p.group].players.push(p.name);
    grouped[p.group].totalSessions += p.sessions;
  });

  return grouped;
}

export default function Page() {
  const grouped = groupPlayersByGroup(players);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Goalkeeper Training Schedule - Players by Group
      </h1>
      <table className="border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Group</th>
            <th className="border p-2">Players</th>
            <th className="border p-2">Total Sessions</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(grouped).map(([group, info]) => (
            <tr key={group}>
              <td className="border p-2 text-center">{group}</td>
              <td className="border p-2">{info.players.join(", ")}</td>
              <td className="border p-2 text-center">{info.totalSessions}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Team Logo */}
      <div className="mt-8 flex justify-center">
        <svg
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
        >
          <path
            d="M200 20 L350 80 L350 200 Q350 280 200 380 Q50 280 50 200 L50 80 Z"
            fill="#f8f8f8"
            stroke="#333"
            strokeWidth="8"
          />
          <defs>
            <pattern
              id="stripes"
              patternUnits="userSpaceOnUse"
              width="40"
              height="20"
            >
              <rect width="20" height="20" fill="#dc2626" />
              <rect x="20" width="20" height="20" fill="#1f2937" />
            </pattern>
          </defs>
          <path
            d="M200 30 L340 85 L340 120 L60 120 L60 85 Z"
            fill="url(#stripes)"
          />
          <rect x="60" y="120" width="280" height="80" fill="white" />
          <text
            x="200"
            y="170"
            textAnchor="middle"
            fontFamily="Arial Black, sans-serif"
            fontSize="36"
            fontWeight="900"
            fill="#1f2937"
          >
            EAGLE F.C.
          </text>
          <path
            d="M60 200 L340 200 L340 240 Q340 300 200 360 Q60 300 60 240 Z"
            fill="#1f2937"
          />
          <path
            d="M120 240 Q140 220 180 230 L200 240 L220 230 Q260 220 280 240 Q270 250 240 245 L200 250 L160 245 Q130 250 120 240"
            fill="white"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="200" cy="235" r="8" fill="white" />
          <path d="M195 232 Q200 228 205 232" fill="white" />
          <circle
            cx="200"
            cy="260"
            r="15"
            fill="white"
            stroke="#1f2937"
            strokeWidth="2"
          />
          <path
            d="M190 255 L200 250 L210 255 L205 265 L195 265 Z"
            fill="#1f2937"
          />
          <path
            d="M200 250 L200 270 M190 255 L210 255 M195 265 L205 265"
            stroke="#1f2937"
            strokeWidth="1"
          />
          <rect x="170" y="320" width="60" height="25" fill="#dc2626" />
          <text
            x="200"
            y="338"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize="16"
            fontWeight="bold"
            fill="white"
          >
            1976
          </text>
        </svg>
      </div>
    </main>
  );
}
