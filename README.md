# Enterprise Active Directory Domain Services Lab on Microsoft Azure

This project demonstrates the deployment of an enterprise-style Active Directory environment on Microsoft Azure using Windows Server 2025.

## Project Summary

The lab simulates a small corporate identity infrastructure with centralized authentication, DNS, organizational units, users, security groups, and remote administration.

## Technologies Used

- Microsoft Azure
- Windows Server 2025
- Active Directory Domain Services
- DNS
- Remote Desktop Protocol
- Azure Virtual Network
- Network Security Groups
- PowerShell

## Lab Configuration

| Component | Details |
|---|---|
| Domain | univen.local |
| Domain Controller | UNIVEN-DC01 |
| Resource Group | UNIVEN-ICT-RG |
| Virtual Network | UNIVEN-VNET |
| Server OS | Windows Server 2025 |
| Users Created | 5 |
| Security Groups | IT_ADMINS, HR_USERS, FINANCE_USERS, SALES_USERS |

## Active Directory Structure

```text
univen.local
└── netshidzivhe-company
    ├── Users
    ├── Computers
    ├── Servers
    ├── Groups
    └── Service Accounts