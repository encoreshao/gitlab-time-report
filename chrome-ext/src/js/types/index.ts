export interface ITimeLog {
  spentTime: number,
  spentAt: Date,
}

export interface ITimeLogDetail extends ITimeLog {
  gitlabUser: string,
  issueDocId: string,
  project: string,
  createdAt: Date,
}

export interface ITimeLogDoc extends ITimeLogDetail {
  docId: string
}

export interface IOriginalTimeNote {
  id: string,
  author: string,
  spentTime: string,
  spentDate: string,
  action: string, // '+' or '-'
}

export interface IParsedTimeNote {
  id: number,
  author: string,
  spentTime: number,
  spentDate: string,
}

// https://gitlab.ekohe.com/api/v4/projects/ekohe%2Finternal%2Fekohe-time-reporting-tool/issues/3
// https://gitlab.ekohe.com/api/v4/projects/ekohe%2Fpodknife/merge_requests/554
export interface IIssueRes {
  // come from api response
  // won't change
  id: number,
  iid: number,
  project_id: number,

  sha: string, // for judge whether this is a issue or merge request

  // maybe change
  title: string,
  web_url: string,
  time_stats: {
    total_time_spent: number,
  },
  _links: {
    project: string,
  }
}

export interface IIssue {
  id: number,
  iid: number,
  project_id: number,

  title: string,
  web_url: string,
  project_api_url: string,
  total_time_spent: number,

  type: string, // 'issue' or 'merge_request'
  last_note_id: number,
  doc_id: string,  // id-iid-project_id
}

export interface IIssuePageInfo {
  curDomainDocId: string,
  curIssue: IIssue
}

///////////////////////////////////////////////////

export interface IAuthBoxState {
  user: any,
  email: string,
  password: string,
  loading: boolean,
  message: string
}

export interface IReportBoxState {
  users: string[],
  projects: string[],
  selectedUser: string,
  selectedProject: string,
  dateFrom: string,
  dateTo: string,
  aggreResult: object,
  message: string
}

export interface IIssueReportProps {
  issuePageInfo: IIssuePageInfo,
}

export interface IIssueReportState {
  aggreResult: any,
}
