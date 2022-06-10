import { errorMessage, apiRequest, timestamp, month } from "./helpers";
import { mutations } from "./api";
import { ProjectMutations } from "./interfaces";
import "dotenv/config";

export default async function saveToApi(content: string) {
  try {
    if (process.env.ORBIT_STORAGE_PATH) {
      const res = await apiRequest<ProjectMutations>(mutations.createCommitMutation, {
        path: process.env.ORBIT_STORAGE_PATH,
        branchName: `${timestamp()}-tracking-data`,
        mergeRequestTitle: `chore: tracking data update for ${month}`,
        commitMessage: `Tracking data update for ${month}`,
        commitContent: content,
        filePath: `${timestamp()}.json`,
      });

      if (res?.data) return res.data;
    }
  } catch (err) {
    errorMessage(err);
  }

  return undefined;
}
