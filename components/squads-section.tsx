"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Player {
  name: string
  role: string
  battingStyle?: string
  bowlingStyle?: string
}

interface Squad {
  [key: string]: Player[]
}

const squadsData: Squad = {
  India: [
    { name: "Rohit Sharma", role: "Captain/Batsman", battingStyle: "Right-hand bat" },
    { name: "Virat Kohli", role: "Middle order Batsman", battingStyle: "Right-hand bat" },
    { name: "KL Rahul", role: "Wicket-keeper/Batsman", battingStyle: "Right-hand bat" },
    { name: "Rishabh Pant", role: "Wicket-keeper/Batsman", battingStyle: "Left-hand bat" },
    { name: "Suryakumar Yadav", role: "Middle order Batsman", battingStyle: "Right-hand bat" },
    {
      name: "Washington Sundar",
      role: "Batting Allrounder",
      battingStyle: "Left-hand bat",
      bowlingStyle: "Right-arm off-break",
    },
    {
      name: "Ravindra Jadeja",
      role: "Allrounder",
      battingStyle: "Left-hand bat",
      bowlingStyle: "Left-arm orthodox spin",
    },
    {
      name: "Hardik Pandya",
      role: "Allrounder",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm fast-medium",
    },
    { name: "Axar Patel", role: "Allrounder", battingStyle: "Left-hand bat", bowlingStyle: "Left-arm orthodox spin" },
    {
      name: "Tilak Varma",
      role: "Batting Allrounder",
      battingStyle: "Left-hand bat",
      bowlingStyle: "Right-arm off-break",
    },
    { name: "Arshdeep Singh", role: "Bowler", battingStyle: "Left-hand bat", bowlingStyle: "Left-arm fast-medium" },
    { name: "Jasprit Bumrah", role: "Bowler", battingStyle: "Right-hand bat", bowlingStyle: "Right-arm fast" },
    { name: "Mohammed Siraj", role: "Bowler", battingStyle: "Right-hand bat", bowlingStyle: "Right-arm fast" },
    { name: "Kuldeep Yadav", role: "Bowler", battingStyle: "Left-hand bat", bowlingStyle: "Left-arm wrist spin" },
    { name: "Yuzvendra Chahal", role: "Bowler", battingStyle: "Right-hand bat", bowlingStyle: "Right-arm leg-break" },
  ],
  Pakistan: [
    { name: "Babar Azam", role: "Captain/Batsman", battingStyle: "Right-hand bat" },
    { name: "Mohammad Rizwan", role: "Wicket-keeper/Batsman", battingStyle: "Right-hand bat" },
    { name: "Fakhar Zaman", role: "Batsman", battingStyle: "Left-hand bat" },
    { name: "Shaheen Afridi", role: "Bowler", bowlingStyle: "Left-arm fast" },
    { name: "Hasan Ali", role: "Bowler", bowlingStyle: "Right-arm fast-medium" },
    { name: "Shadab Khan", role: "All-rounder", battingStyle: "Right-hand bat", bowlingStyle: "Right-arm leg-break" },
    {
      name: "Mohammad Hafeez",
      role: "All-rounder",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm off-break",
    },
    { name: "Asif Ali", role: "Batsman", battingStyle: "Right-hand bat" },
    { name: "Imad Wasim", role: "All-rounder", battingStyle: "Left-hand bat", bowlingStyle: "Left-arm orthodox spin" },
    { name: "Haris Rauf", role: "Bowler", bowlingStyle: "Right-arm fast" },
    {
      name: "Mohammad Nawaz",
      role: "All-rounder",
      battingStyle: "Left-hand bat",
      bowlingStyle: "Left-arm orthodox spin",
    },
    { name: "Sarfaraz Ahmed", role: "Wicket-keeper/Batsman", battingStyle: "Right-hand bat" },
    {
      name: "Khushdil Shah",
      role: "All-rounder",
      battingStyle: "Left-hand bat",
      bowlingStyle: "Left-arm orthodox spin",
    },
    { name: "Mohammad Wasim Jr", role: "Bowler", bowlingStyle: "Right-arm fast-medium" },
    {
      name: "Iftikhar Ahmed",
      role: "All-rounder",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm off-break",
    },
  ],
  "Sri Lanka": [
    {
      name: "Dasun Shanaka",
      role: "Captain/All-rounder",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm medium",
    },
    { name: "Kusal Mendis", role: "Wicket-keeper/Batsman", battingStyle: "Right-hand bat" },
    { name: "Pathum Nissanka", role: "Batsman", battingStyle: "Right-hand bat" },
    {
      name: "Wanindu Hasaranga",
      role: "All-rounder",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm leg-break",
    },
    { name: "Dushmantha Chameera", role: "Bowler", bowlingStyle: "Right-arm fast" },
    { name: "Maheesh Theekshana", role: "Bowler", bowlingStyle: "Right-arm off-break" },
    { name: "Bhanuka Rajapaksa", role: "Batsman", battingStyle: "Left-hand bat" },
    {
      name: "Charith Asalanka",
      role: "All-rounder",
      battingStyle: "Left-hand bat",
      bowlingStyle: "Right-arm off-break",
    },
    {
      name: "Chamika Karunaratne",
      role: "All-rounder",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm fast-medium",
    },
    { name: "Lahiru Kumara", role: "Bowler", bowlingStyle: "Right-arm fast" },
    { name: "Dinesh Chandimal", role: "Wicket-keeper/Batsman", battingStyle: "Right-hand bat" },
    { name: "Ashen Bandara", role: "Batsman", battingStyle: "Right-hand bat" },
    { name: "Praveen Jayawickrama", role: "Bowler", bowlingStyle: "Left-arm orthodox spin" },
    { name: "Nuwan Thushara", role: "Bowler", bowlingStyle: "Left-arm fast-medium" },
    {
      name: "Kamindu Mendis",
      role: "All-rounder",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm off-break",
    },
  ],
  Bangladesh: [
    {
      name: "Shakib Al Hasan",
      role: "Captain/All-rounder",
      battingStyle: "Left-hand bat",
      bowlingStyle: "Left-arm orthodox spin",
    },
    { name: "Mushfiqur Rahim", role: "Wicket-keeper/Batsman", battingStyle: "Right-hand bat" },
    { name: "Tamim Iqbal", role: "Batsman", battingStyle: "Left-hand bat" },
    { name: "Mustafizur Rahman", role: "Bowler", bowlingStyle: "Left-arm fast-medium" },
    { name: "Taskin Ahmed", role: "Bowler", bowlingStyle: "Right-arm fast" },
    { name: "Mahmudullah", role: "All-rounder", battingStyle: "Right-hand bat", bowlingStyle: "Right-arm off-break" },
    { name: "Liton Das", role: "Wicket-keeper/Batsman", battingStyle: "Right-hand bat" },
    {
      name: "Afif Hossain",
      role: "All-rounder",
      battingStyle: "Left-hand bat",
      bowlingStyle: "Left-arm orthodox spin",
    },
    {
      name: "Mehidy Hasan Miraz",
      role: "All-rounder",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm off-break",
    },
    { name: "Shoriful Islam", role: "Bowler", bowlingStyle: "Left-arm fast-medium" },
    { name: "Nurul Hasan", role: "Wicket-keeper/Batsman", battingStyle: "Left-hand bat" },
    { name: "Nasum Ahmed", role: "Bowler", bowlingStyle: "Left-arm orthodox spin" },
    { name: "Yasir Ali", role: "Batsman", battingStyle: "Right-hand bat" },
    { name: "Ebadot Hossain", role: "Bowler", bowlingStyle: "Right-arm fast" },
    { name: "Soumya Sarkar", role: "All-rounder", battingStyle: "Left-hand bat", bowlingStyle: "Right-arm medium" },
  ],
  Afghanistan: [
    {
      name: "Mohammad Nabi",
      role: "Captain/All-rounder",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm off-break",
    },
    { name: "Rashid Khan", role: "All-rounder", battingStyle: "Right-hand bat", bowlingStyle: "Right-arm leg-break" },
    { name: "Rahmanullah Gurbaz", role: "Wicket-keeper/Batsman", battingStyle: "Right-hand bat" },
    { name: "Hazratullah Zazai", role: "Batsman", battingStyle: "Left-hand bat" },
    { name: "Mujeeb Ur Rahman", role: "Bowler", bowlingStyle: "Right-arm off-break" },
    { name: "Fazalhaq Farooqi", role: "Bowler", bowlingStyle: "Left-arm fast-medium" },
    { name: "Najibullah Zadran", role: "All-rounder", battingStyle: "Left-hand bat", bowlingStyle: "Right-arm medium" },
    { name: "Gulbadin Naib", role: "All-rounder", battingStyle: "Right-hand bat", bowlingStyle: "Right-arm medium" },
    {
      name: "Azmatullah Omarzai",
      role: "All-rounder",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm fast-medium",
    },
    { name: "Naveen-ul-Haq", role: "Bowler", bowlingStyle: "Right-arm fast-medium" },
    { name: "Ibrahim Zadran", role: "Batsman", battingStyle: "Right-hand bat" },
    { name: "Karim Janat", role: "All-rounder", battingStyle: "Right-hand bat", bowlingStyle: "Right-arm fast-medium" },
    { name: "Noor Ahmad", role: "Bowler", bowlingStyle: "Left-arm wrist-spin" },
    { name: "Fareed Ahmad", role: "Bowler", bowlingStyle: "Left-arm fast-medium" },
    { name: "Usman Ghani", role: "Batsman", battingStyle: "Right-hand bat" },
  ],
  "Hong Kong": [
    { name: "Nizakat Khan", role: "Captain/Batsman", battingStyle: "Left-hand bat" },
    { name: "Babar Hayat", role: "Batsman", battingStyle: "Right-hand bat" },
    { name: "Kinchit Shah", role: "Wicket-keeper/Batsman", battingStyle: "Right-hand bat" },
    { name: "Aizaz Khan", role: "All-rounder", battingStyle: "Left-hand bat", bowlingStyle: "Right-arm fast-medium" },
    { name: "Ehsan Khan", role: "All-rounder", battingStyle: "Right-hand bat", bowlingStyle: "Right-arm off-break" },
    {
      name: "Haroon Arshad",
      role: "All-rounder",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm fast-medium",
    },
    {
      name: "Yasim Murtaza",
      role: "All-rounder",
      battingStyle: "Left-hand bat",
      bowlingStyle: "Left-arm orthodox spin",
    },
    { name: "Zeeshan Ali", role: "Batsman", battingStyle: "Right-hand bat" },
    { name: "Ayush Shukla", role: "Bowler", bowlingStyle: "Right-arm fast-medium" },
    { name: "Mohammad Ghazanfar", role: "Bowler", bowlingStyle: "Right-arm off-break" },
    { name: "Ahan Trivedi", role: "All-rounder", battingStyle: "Right-hand bat", bowlingStyle: "Right-arm medium" },
    { name: "Martin Coetzee", role: "Bowler", bowlingStyle: "Right-arm fast" },
    { name: "Kyle Christie", role: "Batsman", battingStyle: "Right-hand bat" },
    { name: "Dhananjay Rao", role: "All-rounder", battingStyle: "Right-hand bat", bowlingStyle: "Right-arm medium" },
    { name: "Waqas Barkat", role: "Batsman", battingStyle: "Left-hand bat" },
  ],
  UAE: [
    { name: "CP Rizwan", role: "Captain/Wicket-keeper", battingStyle: "Right-hand bat" },
    { name: "Muhammad Waseem", role: "Batsman", battingStyle: "Right-hand bat" },
    { name: "Vriitya Aravind", role: "Wicket-keeper/Batsman", battingStyle: "Left-hand bat" },
    { name: "Chirag Suri", role: "Batsman", battingStyle: "Right-hand bat" },
    { name: "Basil Hameed", role: "All-rounder", battingStyle: "Right-hand bat", bowlingStyle: "Right-arm off-break" },
    { name: "Rohan Mustafa", role: "All-rounder", battingStyle: "Left-hand bat", bowlingStyle: "Right-arm off-break" },
    { name: "Karthik Meiyappan", role: "Bowler", bowlingStyle: "Right-arm leg-break" },
    { name: "Junaid Siddique", role: "Bowler", bowlingStyle: "Left-arm fast-medium" },
    { name: "Zahoor Khan", role: "Bowler", bowlingStyle: "Right-arm fast" },
    { name: "Akif Raja", role: "All-rounder", battingStyle: "Left-hand bat", bowlingStyle: "Left-arm fast-medium" },
    {
      name: "Aayan Afzal Khan",
      role: "All-rounder",
      battingStyle: "Left-hand bat",
      bowlingStyle: "Left-arm orthodox spin",
    },
    { name: "Ali Naseer", role: "All-rounder", battingStyle: "Right-hand bat", bowlingStyle: "Right-arm medium" },
    { name: "Aryansh Sharma", role: "Batsman", battingStyle: "Right-hand bat" },
    {
      name: "Dhruv Parashar",
      role: "All-rounder",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm off-break",
    },
    { name: "Tanish Suri", role: "Batsman", battingStyle: "Right-hand bat" },
  ],
  Oman: [
    {
      name: "Aqib Ilyas",
      role: "Captain/All-rounder",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm leg-break",
    },
    { name: "Kashyap Prajapati", role: "Wicket-keeper/Batsman", battingStyle: "Right-hand bat" },
    { name: "Jatinder Singh", role: "Batsman", battingStyle: "Right-hand bat" },
    { name: "Ayaan Khan", role: "All-rounder", battingStyle: "Right-hand bat", bowlingStyle: "Right-arm off-break" },
    {
      name: "Mohammad Nadeem",
      role: "All-rounder",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm fast-medium",
    },
    { name: "Bilal Khan", role: "Bowler", bowlingStyle: "Right-arm fast-medium" },
    { name: "Kaleemullah", role: "Bowler", bowlingStyle: "Left-arm fast-medium" },
    { name: "Fayyaz Butt", role: "Bowler", bowlingStyle: "Right-arm fast" },
    { name: "Mehran Khan", role: "All-rounder", battingStyle: "Left-hand bat", bowlingStyle: "Left-arm fast-medium" },
    { name: "Shoaib Khan", role: "All-rounder", battingStyle: "Left-hand bat", bowlingStyle: "Left-arm orthodox spin" },
    { name: "Naseem Khushi", role: "Wicket-keeper/Batsman", battingStyle: "Right-hand bat" },
    {
      name: "Zeeshan Maqsood",
      role: "All-rounder",
      battingStyle: "Left-hand bat",
      bowlingStyle: "Left-arm orthodox spin",
    },
    { name: "Sandeep Goud", role: "All-rounder", battingStyle: "Right-hand bat", bowlingStyle: "Right-arm medium" },
    { name: "Rafiullah", role: "Bowler", bowlingStyle: "Right-arm fast-medium" },
    { name: "Shakeel Ahmad", role: "All-rounder", battingStyle: "Right-hand bat", bowlingStyle: "Right-arm off-break" },
  ],
}

export function SquadsSection() {
  const [selectedCountry, setSelectedCountry] = useState<string>("India")

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-white">Squads</h2>
        </div>

        <div className="mb-8">
          <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger className="w-64 bg-slate-800 border-slate-700 text-white">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent
              className="bg-slate-800 border-slate-700"
              position="popper"
              side="bottom"
              align="start"
              avoidCollisions={false}
              sideOffset={4}
            >
              {Object.keys(squadsData).map((country) => (
                <SelectItem key={country} value={country} className="text-white hover:bg-slate-700">
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedCountry && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {squadsData[selectedCountry].map((player, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-lg">{player.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-slate-300">
                      <span className="font-semibold">Role:</span> {player.role}
                    </p>
                    {player.battingStyle && (
                      <p className="text-slate-300">
                        <span className="font-semibold">Batting:</span> {player.battingStyle}
                      </p>
                    )}
                    {player.bowlingStyle && (
                      <p className="text-slate-300">
                        <span className="font-semibold">Bowling:</span> {player.bowlingStyle}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
