import { NextPage } from "next";
import SidebarLayout from "../../layout/sidebar";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Button from "../../ui/button";
import WorkflowApi from "../../services/workflow/workflowApi";

const WorkflowList: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  console.log(session);

  const api = new WorkflowApi(session?.accessToken);

  const query = useQuery(["workflows"], async () => await api.getAll(), {
    enabled: !!session,
  });

  const data = query.data ?? [];

  return (
    <SidebarLayout>
      <div className="grid grid-cols-4 gap-2 p-16">
        {data.map((workflow) => (
          <div
            key={workflow.id}
            className="flex flex-col gap-3 rounded-2xl bg-gray-50 p-6"
            onClick={() => {
              void router.push(`workflow/${workflow.id}`);
            }}
          >
            <h1>{workflow.name}</h1>
            <h1>#{workflow.id}</h1>
            <p className="text-neutral-400">{workflow.description}</p>
          </div>
        ))}
        <Button
          className="bg-violet-500"
          onClick={() => {
            api
              .create()
              .then((workflow) => {
                void router.push(`workflow/${workflow.id}`);
              })
              .catch(console.error);
          }}
        >
          New Workflow
        </Button>
      </div>
    </SidebarLayout>
  );
};

export default WorkflowList;