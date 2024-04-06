let questions = [
    {
        question: "What does TCP stand for?",
        choices: ["Transmission Control Protocol", "Transport Control Protocol", "Total Control Protocol", "Transmitting Computer Protocol"],
        correctAnswer: "Transmission Control Protocol",
        explanation: "TCP stands for Transmission Control Protocol."
    },
    {
        question: "Which layer of the OSI model is responsible for routing packets?",
        choices: ["Layer 3 - Network Layer", "Layer 2 - Data Link Layer", "Layer 4 - Transport Layer", "Layer 5 - Session Layer"],
        correctAnswer: "Layer 3 - Network Layer",
        explanation: "Layer 3 - Network Layer is responsible for routing packets."
    },
    {
        question: "What does IP stand for?",
        choices: ["Internet Protocol", "Internal Protocol", "Intranet Protocol", "Internet Port"],
        correctAnswer: "Internet Protocol",
        explanation: "IP stands for Internet Protocol."
    },
    {
        question: "Which protocol is used for sending email messages?",
        choices: ["SMTP", "HTTP", "FTP", "POP3"],
        correctAnswer: "SMTP",
        explanation: "SMTP (Simple Mail Transfer Protocol) is used for sending email messages."
    },
    {
        question: "What does DNS stand for?",
        choices: ["Domain Name System", "Dynamic Network Service", "Digital Network Server", "Domain Naming Service"],
        correctAnswer: "Domain Name System",
        explanation: "DNS stands for Domain Name System."
    },
    {
        question: "Which device forwards data packets between different networks?",
        choices: ["Router", "Switch", "Hub", "Modem"],
        correctAnswer: "Router",
        explanation: "A router forwards data packets between different networks."
    },
    {
        question: "What is the purpose of NAT?",
        choices: ["Translate between public and private IP addresses", "Secure network traffic", "Encrypt data packets", "Authenticate network users"],
        correctAnswer: "Translate between public and private IP addresses",
        explanation: "NAT (Network Address Translation) translates between public and private IP addresses."
    },
    {
        question: "Which wireless security protocol provides the highest level of security?",
        choices: ["WPA3", "WPA2", "WEP", "None, all wireless networks are inherently insecure"],
        correctAnswer: "WPA3",
        explanation: "WPA3 provides the highest level of security among wireless security protocols."
    },
    {
        question: "What does VPN stand for?",
        choices: ["Virtual Private Network", "Very Personal Network", "Virtual Public Network", "Verified Private Network"],
        correctAnswer: "Virtual Private Network",
        explanation: "VPN stands for Virtual Private Network."
    },
    {
        question: "Which command is used to test network connectivity?",
        choices: ["ping", "traceroute", "netstat", "ipconfig"],
        correctAnswer: "ping",
        explanation: "The 'ping' command is used to test network connectivity."
    },
    {
        question: "What is the maximum data rate of a standard Ethernet connection?",
        choices: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"],
        correctAnswer: "1 Gbps",
        explanation: "The maximum data rate of a standard Ethernet connection is 1 Gbps (Gigabit per second)."
    },
    {
        question: "What is the default port number for HTTP?",
        choices: ["80", "443", "21", "22"],
        correctAnswer: "80",
        explanation: "The default port number for HTTP (Hypertext Transfer Protocol) is 80."
    },
    {
        question: "What layer of the OSI model is responsible for converting data packets into electrical signals?",
        choices: ["Physical layer", "Data link layer", "Network layer", "Transport layer"],
        correctAnswer: "Physical layer",
        explanation: "The Physical layer of the OSI model is responsible for converting data packets into electrical signals."
    },
    {
        question: "Which device is used to connect multiple network devices together at the Data link layer of the OSI model?",
        choices: ["Switch", "Router", "Hub", "Bridge"],
        correctAnswer: "Switch",
        explanation: "A switch is used to connect multiple network devices together at the Data link layer of the OSI model."
    },
    {
        question: "What is the purpose of ARP (Address Resolution Protocol)?",
        choices: ["To resolve IP addresses to MAC addresses", "To resolve MAC addresses to IP addresses", "To resolve domain names to IP addresses", "To establish secure connections between networks"],
        correctAnswer: "To resolve IP addresses to MAC addresses",
        explanation: "ARP (Address Resolution Protocol) is used to resolve IP addresses to MAC addresses."
    },
    {
        question: "Which of the following is a private IP address range?",
        choices: ["10.0.0.0 to 10.255.255.255", "172.16.0.0 to 172.31.255.255", "192.168.0.0 to 192.168.255.255", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "All of the given ranges are private IP address ranges."
    },
    {
        question: "Which protocol is used to automatically assign IP addresses to network devices?",
        choices: ["DHCP (Dynamic Host Configuration Protocol)", "DNS (Domain Name System)", "FTP (File Transfer Protocol)", "SMTP (Simple Mail Transfer Protocol)"],
        correctAnswer: "DHCP (Dynamic Host Configuration Protocol)",
        explanation: "DHCP (Dynamic Host Configuration Protocol) is used to automatically assign IP addresses to network devices."
    },
    {
        question: "What is the purpose of VLANs (Virtual Local Area Networks)?",
        choices: ["To divide a single physical network into multiple logical networks", "To connect networks in different geographical locations", "To encrypt network traffic", "To improve network security"],
        correctAnswer: "To divide a single physical network into multiple logical networks",
        explanation: "VLANs (Virtual Local Area Networks) are used to divide a single physical network into multiple logical networks."
    },
    {
        question: "What is the purpose of a firewall?",
        choices: ["To monitor and control incoming and outgoing network traffic", "To connect different types of networks together", "To provide wireless network access", "To translate between public and private IP addresses"],
        correctAnswer: "To monitor and control incoming and outgoing network traffic",
        explanation: "A firewall is a network security device that monitors and controls incoming and outgoing network traffic."
    },
    {
        question: "Which protocol is used to securely transfer files over a network?",
        choices: ["SFTP (SSH File Transfer Protocol)", "FTP (File Transfer Protocol)", "TFTP (Trivial File Transfer Protocol)", "HTTP (Hypertext Transfer Protocol)"],
        correctAnswer: "SFTP (SSH File Transfer Protocol)",
        explanation: "SFTP (SSH File Transfer Protocol) is used to securely transfer files over a network."
    },
    {
        question: "Which network device operates at Layer 3 (Network layer) of the OSI model?",
        choices: ["Router", "Switch", "Hub", "Bridge"],
        correctAnswer: "Router",
        explanation: "A router operates at Layer 3 (Network layer) of the OSI model."
    },
    {
        question: "Which TCP/IP protocol is responsible for converting domain names to IP addresses?",
        choices: ["DNS (Domain Name System)", "DHCP (Dynamic Host Configuration Protocol)", "FTP (File Transfer Protocol)", "HTTP (Hypertext Transfer Protocol)"],
        correctAnswer: "DNS (Domain Name System)",
        explanation: "DNS (Domain Name System) is responsible for converting domain names to IP addresses."
    },
    {
        question: "Which protocol is used to securely access a remote server or network device?",
        choices: ["SSH (Secure Shell)", "HTTP (Hypertext Transfer Protocol)", "FTP (File Transfer Protocol)", "Telnet"],
        correctAnswer: "SSH (Secure Shell)",
        explanation: "SSH (Secure Shell) is used to securely access a remote server or network device."
    },
    {
        question: "What is the purpose of a proxy server?",
        choices: ["To act as an intermediary between clients and servers", "To connect different types of networks together", "To provide wireless network access", "To translate between public and private IP addresses"],
        correctAnswer: "To act as an intermediary between clients and servers",
        explanation: "A proxy server acts as an intermediary between clients and servers."
    },
    {
        question: "What is the purpose of subnetting?",
        choices: ["To divide a large network into smaller, manageable subnetworks", "To connect networks in different geographical locations", "To encrypt network traffic", "To improve network security"],
        correctAnswer: "To divide a large network into smaller, manageable subnetworks",
        explanation: "Subnetting is used to divide a large network into smaller, manageable subnetworks."
    },
    {
        question: "Which type of address is used to uniquely identify a network interface on a TCP/IP network?",
        choices: ["IP address", "MAC address", "DNS address", "URL"],
        correctAnswer: "MAC address",
        explanation: "A MAC address (Media Access Control address) is used to uniquely identify a network interface on a TCP/IP network."
    },
    {
        question: "What is the purpose of SNMP (Simple Network Management Protocol)?",
        choices: ["To manage and monitor network devices", "To translate between public and private IP addresses", "To connect networks in different geographical locations", "To improve network security"],
        correctAnswer: "To manage and monitor network devices",
        explanation: "SNMP (Simple Network Management Protocol) is used to manage and monitor network devices."
    },
    {
        question: "Which of the following is a wireless networking standard?",
        choices: ["802.11", "Ethernet", "USB", "Fiber optic"],
        correctAnswer: "802.11",
        explanation: "802.11 is a wireless networking standard commonly known as Wi-Fi."
    },
    {
        question: "What is the purpose of a DHCP relay agent?",
        choices: ["To forward DHCP messages between clients and servers", "To translate between public and private IP addresses", "To connect networks in different geographical locations", "To improve network security"],
        correctAnswer: "To forward DHCP messages between clients and servers",
        explanation: "A DHCP relay agent is used to forward DHCP messages between clients and servers."
    },

    {
        question: "Which layer of the OSI model is responsible for error detection and correction at the physical level?",
        choices: ["Physical layer", "Data link layer", "Transport layer", "Network layer"],
        correctAnswer: "Physical layer",
        explanation: "The Physical layer of the OSI model is responsible for error detection and correction at the physical level."
    },
    {
        question: "Which OSI layer performs segmentation and reassembly of data packets?",
        choices: ["Transport layer", "Network layer", "Data link layer", "Session layer"],
        correctAnswer: "Transport layer",
        explanation: "The Transport layer of the OSI model performs segmentation and reassembly of data packets."
    },
    {
        question: "Which layer of the OSI model is responsible for flow control, error checking, and retransmission of data?",
        choices: ["Transport layer", "Network layer", "Data link layer", "Physical layer"],
        correctAnswer: "Transport layer",
       explanation: "The Transport layer of the OSI model is responsible for flow control, error checking, and retransmission of data."
    },
        {
            question: "In the OSI model, which layer handles the logical addressing and routing of packets?",
            choices: ["Network layer", "Data link layer", "Transport layer", "Session layer"],
            correctAnswer: "Network layer",
            explanation: "The Network layer of the OSI model handles the logical addressing and routing of packets."
        },
        {
            question: "Which OSI layer establishes, manages, and terminates connections between applications?",
            choices: ["Session layer", "Presentation layer", "Transport layer", "Application layer"],
            correctAnswer: "Session layer",
            explanation: "The Session layer of the OSI model establishes, manages, and terminates connections between applications."
        },
        {
            question: "Which layer of the OSI model is responsible for data encryption and decryption?",
            choices: ["Presentation layer", "Session layer", "Application layer", "Transport layer"],
            correctAnswer: "Presentation layer",
            explanation: "The Presentation layer of the OSI model is responsible for data encryption and decryption."
        },
        {
            question: "In the OSI model, which layer converts data into a format suitable for transmission?",
            choices: ["Presentation layer", "Transport layer", "Data link layer", "Application layer"],
            correctAnswer: "Presentation layer",
            explanation: "The Presentation layer of the OSI model converts data into a format suitable for transmission."
        },
        {
            question: "Which layer of the OSI model is responsible for establishing, maintaining, and terminating sessions between applications?",
            choices: ["Session layer", "Transport layer", "Application layer", "Presentation layer"],
            correctAnswer: "Session layer",
            explanation: "The Session layer of the OSI model is responsible for establishing, maintaining, and terminating sessions between applications."
        },
        {
            question: "Which layer of the OSI model performs error detection using cyclic redundancy check (CRC)?",
            choices: ["Data link layer", "Physical layer", "Transport layer", "Network layer"],
            correctAnswer: "Data link layer",
            explanation: "The Data link layer of the OSI model performs error detection using cyclic redundancy check (CRC)."
        },
        {
            question: "Which OSI layer is responsible for converting data from machine-readable format to user-readable format and vice versa?",
            choices: ["Presentation layer", "Application layer", "Session layer", "Transport layer"],
            correctAnswer: "Presentation layer",
            explanation: "The Presentation layer of the OSI model is responsible for converting data from machine-readable format to user-readable format and vice versa."
        },
        {
            question: "Which layer of the OSI model provides a common interface for application-level services to the network?",
            choices: ["Application layer", "Transport layer", "Presentation layer", "Session layer"],
            correctAnswer: "Application layer",
            explanation: "The Application layer of the OSI model provides a common interface for application-level services to the network."
        },
        {
            question: "Which OSI layer is responsible for establishing, managing, and terminating connections between network devices?",
            choices: ["Session layer", "Transport layer", "Network layer", "Data link layer"],
            correctAnswer: "Session layer",
            explanation: "The Session layer of the OSI model is responsible for establishing, managing, and terminating connections between network devices."
        },
        {
            question: "Which layer of the OSI model provides services for exchanging information between network devices over a physical medium?",
            choices: ["Data link layer", "Physical layer", "Network layer", "Transport layer"],
            correctAnswer: "Data link layer",
            explanation: "The Data link layer of the OSI model provides services for exchanging information between network devices over a physical medium."
        },
        {
            question: "In the OSI model, which layer ensures that data is transferred reliably between network devices?",
            choices: ["Transport layer", "Network layer", "Data link layer", "Physical layer"],
            correctAnswer: "Transport layer",
            explanation: "The Transport layer of the OSI model ensures that data is transferred reliably between network devices."
        },
        {
            question: "Which layer of the OSI model handles the encryption and decryption of data for secure transmission over a network?",
            choices: ["Presentation layer", "Application layer", "Transport layer", "Session layer"],
            correctAnswer: "Presentation layer",
            explanation: "The Presentation layer of the OSI model handles the encryption and decryption of data for secure transmission over a network."
        },
        {
            question: "In the OSI model, which layer is responsible for detecting and correcting errors that occur during data transmission?",
            choices: ["Data link layer", "Network layer", "Physical layer", "Transport layer"],
            correctAnswer: "Data link layer",
            explanation: "The Data link layer of the OSI model is responsible for detecting and correcting errors that occur during data transmission."
        },
        {
            question: "Which OSI layer is responsible for routing and forwarding data packets between network segments?",
            choices: ["Network layer", "Data link layer", "Transport layer", "Physical layer"],
            correctAnswer: "Network layer",
            explanation: "The Network layer of the OSI model is responsible for routing and forwarding data packets between network segments."
        },
        {
            question: "Which layer of the OSI model translates data into a format that can be understood by the application?",
            choices: ["Presentation layer", "Application layer", "Session layer", "Transport layer"],
            correctAnswer: "Presentation layer",
            explanation: "The Presentation layer of the OSI model translates data into a format that can be understood by the application."
        },
        {
            question: "In the OSI model, which layer is responsible for establishing, maintaining, and terminating virtual circuits?",
            choices: ["Transport layer", "Network layer", "Data link layer", "Session layer"],
            correctAnswer: "Session layer",
            explanation: "The Session layer of the OSI model is responsible for establishing, maintaining, and terminating virtual circuits."
        },
        {
            question: "Which layer of the OSI model ensures the reliable delivery of data packets between network devices?",
            choices: ["Transport layer", "Network layer", "Data link layer", "Physical layer"],
            correctAnswer: "Transport layer",
            explanation: "The Transport layer of the OSI model ensures the reliable delivery of data packets between network devices."
        },
        {
            question: "Which type of NAT allows multiple private IP addresses to be mapped to a single public IP address using different port numbers?",
            choices: ["Static NAT", "Dynamic NAT", "NAT overload", "PAT (Port Address Translation)"],
            correctAnswer: "PAT (Port Address Translation)",
            explanation: "PAT (Port Address Translation), also known as NAT overload, allows multiple private IP addresses to be mapped to a single public IP address using different port numbers to differentiate between connections."
        },
        {
            question: "What is the primary purpose of NAT overload?",
            choices: [
                "To conserve public IP addresses",
                "To provide encryption for data transmission",
                "To establish secure VPN connections",
                "To manage network traffic congestion"
            ],
            correctAnswer: "To conserve public IP addresses",
            explanation: "The primary purpose of NAT overload, also known as PAT (Port Address Translation), is to conserve public IP addresses by allowing multiple private IP addresses to share a single public IP address."
        },
        {
            question: "How does NAT overload handle multiple private IP addresses using a single public IP address?",
            choices: [
                "By assigning unique port numbers to each private IP address",
                "By encrypting the data packets",
                "By routing the packets through multiple gateways",
                "By increasing the bandwidth of the network"
            ],
            correctAnswer: "By assigning unique port numbers to each private IP address",
            explanation: "NAT overload assigns unique port numbers to each private IP address, allowing multiple devices within a private network to share a single public IP address. This process is also known as Port Address Translation (PAT)."
        },
        {
            question: "Which of the following IP address ranges is reserved for private networks according to RFC 1918?",
            choices: [
                "10.0.0.0 - 10.255.255.255",
                "172.16.0.0 - 172.31.255.255",
                "192.168.0.0 - 192.168.255.255",
                "169.254.0.0 - 169.254.255.255"
            ],
            correctAnswer: "172.16.0.0 - 172.31.255.255",
            explanation: "The IP address range 172.16.0.0 - 172.31.255.255 is reserved for private networks according to RFC 1918, which defines the standards for private IP addressing."
        },
        {
            question: "What is the purpose of CIDR (Classless Inter-Domain Routing) notation?",
            choices: [
                "To uniquely identify each device on a network",
                "To specify the size of a subnet mask",
                "To designate reserved IP addresses",
                "To determine the geographic location of an IP address"
            ],
            correctAnswer: "To specify the size of a subnet mask",
            explanation: "CIDR notation is used to specify the size of a subnet mask, allowing for more efficient allocation of IP addresses and routing of network traffic. It represents the number of significant bits in the subnet mask."
        },
        {
            question: "Which IPv4 address is used to represent all hosts on the local network?",
            choices: [
                "127.0.0.1",
                "255.255.255.0",
                "10.0.0.1",
                "0.0.0.0"
            ],
            correctAnswer: "0.0.0.0",
            explanation: "The IPv4 address 0.0.0.0 is used to represent all hosts on the local network. It typically serves as a default gateway address or placeholder until a specific IP address is assigned to a device."
        },
        {
            question: "What is the purpose of the IPv4 address 255.255.255.255?",
            choices: [
                "Broadcast address for the local network",
                "Loopback address for testing network connectivity",
                "Default gateway address for the local network",
                "Reserved address for multicast communication"
            ],
            correctAnswer: "Broadcast address for the local network",
            explanation: "The IPv4 address 255.255.255.255 is the broadcast address for the local network. When a packet is sent to this address, it is delivered to all hosts on the network segment, allowing for broadcast communication."
        },
        {
            question: "What is the IPv4 address used for loopback testing on a local device?",
            choices: [
                "127.0.0.1",
                "192.168.1.1",
                "10.0.0.1",
                "172.16.0.1"
            ],
            correctAnswer: "127.0.0.1",
            explanation: "The IPv4 address 127.0.0.1 is used for loopback testing on a local device. It allows a device to send packets to itself for testing network connectivity without involving external network devices."
        },
        {
            question: "Which IPv4 address range is reserved for Automatic Private IP Addressing (APIPA) when a DHCP server is unavailable?",
            choices: [
                "169.254.0.0 - 169.254.255.255",
                "192.168.0.0 - 192.168.255.255",
                "10.0.0.0 - 10.255.255.255",
                "172.16.0.0 - 172.31.255.255"
            ],
            correctAnswer: "169.254.0.0 - 169.254.255.255",
            explanation: "The IPv4 address range 169.254.0.0 - 169.254.255.255 is reserved for Automatic Private IP Addressing (APIPA) when a DHCP server is unavailable. Devices automatically assign themselves an IP address within this range."
        },
        {
            question: "Which IPv4 address is used to represent the default route or gateway for a network?",
            choices: [
                "192.168.1.1",
                "10.0.0.1",
                "172.16.0.1",
                "0.0.0.0"
            ],
            correctAnswer: "0.0.0.0",
            explanation: "The IPv4 address 0.0.0.0 is used to represent the default route or gateway for a network. It typically indicates that there is no specific route available for a particular destination, and packets should be forwarded to the default gateway."
        },
        {
            question: "What does APIPA stand for in networking?",
            choices: [
                "Automated Private Internet Protocol Addressing",
                "Automatic Private IP Addressing",
                "Advanced Public IP Addressing",
                "Authenticated Personal IP Addressing"
            ],
            correctAnswer: "Automatic Private IP Addressing",
            explanation: "APIPA stands for Automatic Private IP Addressing. It is a feature in networking that allows devices to automatically assign themselves an IP address when a DHCP server is not available."
        },
        {
            question: "Which IPv4 address range is typically used for APIPA?",
            choices: [
                "192.168.0.0 - 192.168.255.255",
                "10.0.0.0 - 10.255.255.255",
                "172.16.0.0 - 172.31.255.255",
                "169.254.0.0 - 169.254.255.255"
            ],
            correctAnswer: "169.254.0.0 - 169.254.255.255",
            explanation: "The IPv4 address range 169.254.0.0 - 169.254.255.255 is typically used for Automatic Private IP Addressing (APIPA). Devices automatically assign themselves an IP address within this range when a DHCP server is not available."
        },
        {
            question: "What is the subnet mask commonly associated with APIPA addresses?",
            choices: [
                "255.255.255.0",
                "255.0.0.0",
                "255.255.0.0",
                "255.255.255.255"
            ],
            correctAnswer: "255.255.0.0",
            explanation: "The subnet mask commonly associated with APIPA addresses is 255.255.0.0. This allows for a large number of available IP addresses within the APIPA range for local network communication."
        },
        {
            question: "What is the primary motivation behind the development of IPv6?",
            choices: [
                "To provide more efficient addressing and routing",
                "To improve network security",
                "To increase network speed",
                "To support legacy devices"
            ],
            correctAnswer: "To provide more efficient addressing and routing",
            explanation: "The primary motivation behind the development of IPv6 is to provide more efficient addressing and routing, as well as to alleviate the limitations of IPv4 address space."
        },
        {
            question: "How many bits are used to represent an IPv6 address?",
            choices: [
                "32 bits",
                "64 bits",
                "128 bits",
                "256 bits"
            ],
            correctAnswer: "128 bits",
            explanation: "An IPv6 address is represented using 128 bits, which allows for a significantly larger address space compared to IPv4."
        },
        {
            question: "Which of the following is a valid type of IPv6 address?",
            choices: [
                "Link-local address",
                "Loopback address",
                "Site-local address",
                "All of the above"
            ],
            correctAnswer: "All of the above",
            explanation: "IPv6 addresses include various types, such as link-local addresses, loopback addresses, and site-local addresses, among others."
        },
        {
            question: "In IPv6 address notation, how are consecutive groups of zeros represented?",
            choices: [
                "As a single zero",
                "As a double colon (::)",
                "As a dash (-)",
                "As a wildcard (*)"
            ],
            correctAnswer: "As a double colon (::)",
            explanation: "Consecutive groups of zeros in an IPv6 address can be represented as a double colon (::) to shorten the notation and make it more concise."
        },
        {
            question: "Which protocol is commonly used for dynamic IPv6 address assignment?",
            choices: [
                "DHCPv4",
                "ARP",
                "ICMPv6",
                "DHCPv6"
            ],
            correctAnswer: "DHCPv6",
            explanation: "DHCPv6 (Dynamic Host Configuration Protocol for IPv6) is commonly used for dynamic IPv6 address assignment in networks."
        },
        {
            question: "What is the size of the IPv6 header?",
            choices: [
                "20 bytes",
                "40 bytes",
                "60 bytes",
                "80 bytes"
            ],
            correctAnswer: "40 bytes",
            explanation: "The IPv6 header has a fixed size of 40 bytes, compared to the variable-sized IPv4 header."
        },
        {
            question: "Which transition mechanism facilitates communication between IPv6 and IPv4 networks?",
            choices: [
                "Tunneling",
                "Subnetting",
                "Packet filtering",
                "Checksumming"
            ],
            correctAnswer: "Tunneling",
            explanation: "Tunneling is a transition mechanism used to encapsulate IPv6 packets within IPv4 packets, allowing communication between IPv6 and IPv4 networks."
        },
        {
            question: "What type of routing protocol is commonly used with IPv6?",
            choices: [
                "OSPF",
                "RIP",
                "EIGRP",
                "All of the above"
            ],
            correctAnswer: "All of the above",
            explanation: "Various routing protocols, such as OSPF (Open Shortest Path First), RIP (Routing Information Protocol), and EIGRP (Enhanced Interior Gateway Routing Protocol), can be used with IPv6."
        },
        {
            question: "Which of the following is an IPv6 extension header?",
            choices: [
                "TCP header",
                "UDP header",
                "Routing header",
                "MAC header"
            ],
            correctAnswer: "Routing header",
            explanation: "The Routing header is one of the IPv6 extension headers used to specify a list of intermediate nodes that should be visited by a packet on its way to the destination."
        },
        {
            question: "Which protocol is used for secure neighbor discovery in IPv6 networks?",
            choices: [
                "ARP",
                "ICMPv6",
                "SNMP",
                "Secure Neighbor Discovery (SEND)"
            ],
            correctAnswer: "Secure Neighbor Discovery (SEND)",
            explanation: "Secure Neighbor Discovery (SEND) is a protocol used for secure neighbor discovery in IPv6 networks, providing protection against various types of attacks."
        },
        {
            question: "What is the primary advantage of using IPv6 for future network deployments?",
            choices: [
                "Improved network performance",
                "Enhanced network security",
                "Increased address space",
                "Simplified network management"
            ],
            correctAnswer: "Increased address space",
            explanation: "The primary advantage of using IPv6 for future network deployments is the significantly larger address space it offers compared to IPv4, which is essential for accommodating the growing number of connected devices."
        },
        {
            question: "Which IPv6 address range is reserved for multicast communication?",
            choices: [
                "2000::/3",
                "FE80::/10",
                "FF00::/8",
                "FD00::/8"
            ],
            correctAnswer: "FF00::/8",
            explanation: "The IPv6 address range FF00::/8 is reserved for multicast communication, allowing packets to be sent to multiple recipients efficiently."
        },
        {
            question: "Which protocol provides mobility support for IPv6 networks?",
            choices: [
                "Mobile IP",
                "SSH",
                "IPSec",
                "FTP"
            ],
            correctAnswer: "Mobile IP",
            explanation: "Mobile IP is a protocol that provides mobility support for IPv6 networks, allowing mobile devices to maintain connectivity while moving between different network locations."
        },
        {
            question: "In IPv6, at what layer is packet fragmentation performed?",
            choices: [
                "Network layer",
                "Transport layer",
                "Data link layer",
                "Application layer"
            ],
            correctAnswer: "Network layer",
            explanation: "In IPv6, packet fragmentation is performed at the network layer, specifically by routers, when the size of a packet exceeds the maximum transmission unit (MTU) of a network segment."
        },
        {
            question: "Which transition technique enables IPv6 communication over an IPv4 network by encapsulating IPv6 packets within IPv4 packets?",
            choices: [
                "NAT64",
                "6to4",
                "ISATAP",
                "DS-Lite"
            ],
            correctAnswer: "6to4",
            explanation: "The 6to4 transition technique enables IPv6 communication over an IPv4 network by encapsulating IPv6 packets within IPv4 packets, allowing communication between IPv6 and IPv4 networks."
        },
        {
            question: "Which protocol is used for IPv6 Stateless Address Autoconfiguration (SLAAC)?",
            choices: [
                "DHCPv6",
                "ARP",
                "ICMPv6",
                "DNS"
            ],
            correctAnswer: "ICMPv6",
            explanation: "IPv6 Stateless Address Autoconfiguration (SLAAC) uses ICMPv6 (Internet Control Message Protocol version 6) to automatically configure IPv6 addresses on devices without the need for a DHCPv6 server."
        },
        {
            question: "What is the primary characteristic of an IPv6 anycast address?",
            choices: [
                "It is assigned to multiple interfaces",
                "It is unique within the network segment",
                "It is used for one-to-many communication",
                "It is reserved for loopback testing"
            ],
            correctAnswer: "It is assigned to multiple interfaces",
            explanation: "An IPv6 anycast address is assigned to multiple interfaces, and packets sent to the anycast address are routed to the nearest interface in the anycast group, typically for the purpose of load balancing or redundancy."
        },
        {
            question: "What is the purpose of an IPv6 Unique Local Address (ULA)?",
            choices: [
                "To uniquely identify a device on the global Internet",
                "To facilitate communication within a specific organization",
                "To provide secure neighbor discovery in IPv6 networks",
                "To reserve IP addresses for multicast communication"
            ],
            correctAnswer: "To facilitate communication within a specific organization",
            explanation: "An IPv6 Unique Local Address (ULA) is used to facilitate communication within a specific organization or site, providing globally unique addresses that are not routable on the global Internet."
        },
        {
            question: "Which IPv6 extension header is used to provide authentication, integrity, and confidentiality for IPv6 packets?",
            choices: [
                "Hop-by-Hop Options header",
                "Authentication header (AH)",
                "Destination Options header",
                "Encapsulating Security Payload header (ESP)"
            ],
            correctAnswer: "Encapsulating Security Payload header (ESP)",
            explanation: "The Encapsulating Security Payload header (ESP) is used to provide authentication, integrity, and confidentiality for IPv6 packets, typically in the context of IPSec (Internet Protocol Security)."
        },
        {
            question: "What is the maximum transmission unit (MTU) size for IPv6 jumbo frames?",
            choices: [
                "1500 bytes",
                "4000 bytes",
                "9000 bytes",
                "12000 bytes"
            ],
            correctAnswer: "9000 bytes",
            explanation: "IPv6 jumbo frames have a maximum transmission unit (MTU) size of 9000 bytes, allowing for larger payloads and potentially improving network efficiency."
        },
        

    // Add more questions as needed
];
// Export the questions array
window.questions = questions;