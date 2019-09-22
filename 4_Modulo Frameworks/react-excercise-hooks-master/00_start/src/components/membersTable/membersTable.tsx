import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';
import { MemberRow } from './memberRow';
import { MemberHead } from './memberHead';

interface Props { }

export const MembersTableComponent: React.StatelessComponent<Props> = props => {
  const [members, setMembers] = React.useState([] as MemberEntity[]);
  const [organization, setOrganization] = React.useState("lemoncode");
  const [organizationFound, setOrganizationFound] = React.useState(true);
  const [apiError, setApiError] = React.useState('');

  const loadMembers = () => {
    memberAPI.getAllMembers(organization)
      .then(members => {
                        setMembers(members);
                        setOrganizationFound(true)
                      })
      .catch((error: Error) => {
                        setApiError(error.message);
                        setOrganizationFound(false)
                      });
  };

  return (
    <div className="row">
      <h2> Members Page</h2>
      <input value={organization} onChange={(e) => setOrganization(e.target.value)}></input>
      <button onClick={loadMembers}>Load</button>
      {!organizationFound &&
        <div style={{color: 'red'}}>{apiError}</div>
      }
      {organizationFound &&
        <table className="table">
          <thead>
            <MemberHead />
          </thead>
          <tbody>
            {members.map((member: MemberEntity) => (
              <MemberRow key={member.id} member={member} />
            ))}
          </tbody>
        </table>
      }
    </div>
  );
};
