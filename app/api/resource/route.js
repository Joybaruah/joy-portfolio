const { google } = require("googleapis");
const fs = require("fs");

import { error } from "console";
// next js imports
import { NextResponse } from "next/server";

// google drive
const credentials = require("../../../gdrivecreds.json");

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: [
    "https://www.googleapis.com/auth/drive.readonly",
    "https://www.googleapis.com/auth/drive.metadata.readonly",
  ],
});

const drive = google.drive({ version: "v3", auth });

const folderId = "1blZnf2iivbg2GVfmFPVaV2M4vJBInuam";

export async function GET() {
  drive.files.list(
    {
      q: `'${folderId}' in parents`,
      pageSize: 10,
    },
    {
      responseType: "stream",
    },
    (err, res) => {
      if (err) {
        console.error("Error reading file:", err);
        return;
      }
      
    }
  );

  return NextResponse.json({ folderId });
}
